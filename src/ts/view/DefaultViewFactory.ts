class DefaultViewFactory implements ViewFactory {
  makeOnOff(label: string, parameter: Parameter, parent: JQuery) {
    var wrapper = $("<div />", { class: "onoff" }).text(label).appendTo(parent);
    var checkbox = $("<input />", { type: 'checkbox' }).appendTo(wrapper).click(function() {
      parameter.setValue(checkbox.prop("checked") ? 1 : 0);
    });
    parameter.observe((value: number, parameter: Parameter) => {
      checkbox.prop("checked", value > 0 ? true : false);
    });
  }
}
