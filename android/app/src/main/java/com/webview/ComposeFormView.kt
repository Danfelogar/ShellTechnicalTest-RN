package com.webview

import android.content.Context
import android.widget.FrameLayout
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.unit.dp
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.uimanager.UIManagerHelper
import com.facebook.react.uimanager.events.Event

class ComposeFormView(context: Context) : FrameLayout(context) {
    private var currentValue: String = ""
    private val composeView: ComposeView

    init {
        composeView = ComposeView(context).apply {
            setContent {
                ComposeFormContent()
            }
        }
        addView(composeView)
    }

    fun updateProps(
        title: String?,
        placeholder: String?,
        buttonText: String?,
        initialValue: String?
    ) {
        composeView.setContent {
            ComposeFormContent(
                title = title ?: "Default Title",
                placeholder = placeholder ?: "Enter text...",
                buttonText = buttonText ?: "Submit",
                initialValue = initialValue ?: "",
                onValueChange = { newValue ->
                    currentValue = newValue
                    emitTextChange(newValue)
                },
                onButtonClick = {
                    emitButtonPress(currentValue)
                }
            )
        }
    }

    @Composable
    fun ComposeFormContent(
        title: String = "Default Title",
        placeholder: String = "Enter text...",
        buttonText: String = "Submit",
        initialValue: String = "",
        onValueChange: (String) -> Unit = {},
        onButtonClick: () -> Unit = {}
    ) {
        var textValue by remember { mutableStateOf(initialValue) }
        // Update internal state when initialValue prop changes
        LaunchedEffect(initialValue) {
            textValue = initialValue
        }

        Surface(
            modifier = Modifier,
            tonalElevation = 2.dp
        ) {
            Card(
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(
                    modifier = Modifier.padding(16.dp)
                ) {
                    Text(
                        text = title,
                        style = MaterialTheme.typography.headlineSmall,
                        color = MaterialTheme.colorScheme.primary
                    )

                    OutlinedTextField(
                        value = textValue,
                        onValueChange = {
                            textValue = it
                            onValueChange(it)
                        },
                        label = { Text(placeholder) },
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(vertical = 8.dp),
                        singleLine = true
                    )

                    Button(
                        onClick = onButtonClick,
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(top = 8.dp)
                    ) {
                        Text(buttonText)
                    }
                }
            }
        }
    }

    private fun emitTextChange(value: String) {
        val reactContext = context as ReactContext
        val surfaceId = UIManagerHelper.getSurfaceId(reactContext)
        val eventDispatcher = UIManagerHelper.getEventDispatcherForReactTag(reactContext, id)

        val payload = Arguments.createMap().apply {
            putString("value", value)
        }

        val event = TextChangeEvent(surfaceId, id, payload)
        eventDispatcher?.dispatchEvent(event)
    }

    private fun emitButtonPress(value: String) {
        val reactContext = context as ReactContext
        val surfaceId = UIManagerHelper.getSurfaceId(reactContext)
        val eventDispatcher = UIManagerHelper.getEventDispatcherForReactTag(reactContext, id)

        val payload = Arguments.createMap().apply {
            putString("value", value)
        }

        val event = ButtonPressEvent(surfaceId, id, payload)
        eventDispatcher?.dispatchEvent(event)
    }

    inner class TextChangeEvent(
        surfaceId: Int,
        viewId: Int,
        private val payload: WritableMap
    ) : Event<TextChangeEvent>(surfaceId, viewId) {
        override fun getEventName() = "onTextChange"
        override fun getEventData() = payload
    }

    inner class ButtonPressEvent(
        surfaceId: Int,
        viewId: Int,
        private val payload: WritableMap
    ) : Event<ButtonPressEvent>(surfaceId, viewId) {
        override fun getEventName() = "onButtonPress"
        override fun getEventData() = payload
    }
}