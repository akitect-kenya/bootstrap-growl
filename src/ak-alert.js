class Alert {
    /**
     * Alert constructor.
     *
     * @param options
     */
    constructor (options) {
        // Merge the options
        this.options = Object.assign({}, options, this.defaultOptions);
    }

    /**
     * Show alert message.
     *
     * @param message
     * @returns {*}
     */
    show(message) {
        // Create the alert html element.
        this.alert = Alert._createAlertElement();

        // Add the base classes
        this.alert.className = "ak-alert ";

        // Check the type of alert intended
        if (this.options.type) this.alert.className += (" " + this.options.type);

        // Append the message to the alert element
        this.alert.innerHTML = message;

        // Add the defined styles
        if (this.options.css) {
            for (style in this.options.css) {
                this.alert.style[style] = this.options.css[style];
            }
        }

        // Append the alert to the defined base element
        Alert._appendToParentElement(this.alert);

        return this.alert;
    }

    /**
     * Create the HTML element.
     *
     * @returns {Element}
     * @private
     */
    static _createAlertElement() {
        return document.createElement('<div>');
    }

    /**
     * Add the alert element to the base.
     *
     * @param alert
     * @private
     */
    static _appendToParentElement(alert) {
        document.querySelector(this.options.base).innerHTML(alert);
    }
}

export default Alert;