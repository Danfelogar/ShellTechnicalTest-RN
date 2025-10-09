package com.webview

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.ComposeFormManagerInterface
import com.facebook.react.viewmanagers.ComposeFormManagerDelegate

@ReactModule(name = ComposeFormManager.REACT_CLASS)
class ComposeFormManager(context: ReactApplicationContext) : SimpleViewManager<ComposeFormView>(), ComposeFormManagerInterface<ComposeFormView> {

  private val delegate: ComposeFormManagerDelegate<ComposeFormView, ComposeFormManager> = ComposeFormManagerDelegate(this)

  override fun getDelegate(): ViewManagerDelegate<ComposeFormView> = delegate

  override fun getName(): String = REACT_CLASS

  override fun createViewInstance(context: ThemedReactContext): ComposeFormView {
    return ComposeFormView(context)
  }

  @ReactProp(name = "title")
  override fun setTitle(view: ComposeFormView, title: String?) {
    // Store the title and update all props together
    view.tag = (view.tag as? PropsHolder ?: PropsHolder()).copy(title = title)
    updateAllProps(view)
  }

  @ReactProp(name = "placeholder")
  override fun setPlaceholder(view: ComposeFormView, placeholder: String?) {
    view.tag = (view.tag as? PropsHolder ?: PropsHolder()).copy(placeholder = placeholder)
    updateAllProps(view)
  }

  @ReactProp(name = "buttonText")
  override fun setButtonText(view: ComposeFormView, buttonText: String?) {
    view.tag = (view.tag as? PropsHolder ?: PropsHolder()).copy(buttonText = buttonText)
    updateAllProps(view)
  }

  @ReactProp(name = "initialValue")
  override fun setInitialValue(view: ComposeFormView, initialValue: String?) {
    view.tag = (view.tag as? PropsHolder ?: PropsHolder()).copy(initialValue = initialValue)
    updateAllProps(view)
  }

  private fun updateAllProps(view: ComposeFormView) {
    val props = view.tag as? PropsHolder ?: return
    view.updateProps(
      title = props.title,
      placeholder = props.placeholder,
      buttonText = props.buttonText,
      initialValue = props.initialValue
    )
  }

  override fun getExportedCustomDirectEventTypeConstants(): Map<String, Any> {
    return mapOf(
      "onTextChange" to mapOf("registrationName" to "onTextChange"),
      "onButtonPress" to mapOf("registrationName" to "onButtonPress")
    )
  }

  companion object {
    const val REACT_CLASS = "ComposeForm"
  }

  private data class PropsHolder(
    val title: String? = null,
    val placeholder: String? = null,
    val buttonText: String? = null,
    val initialValue: String? = null
  )
}