class Tab {
    static TABS = [];
    static active = "tabActive";
    static inactive = "tabInactive";
    static btnActive = "btnActive";
    static btnInactive = "btnInactive";

    constructor(name, content) {
        this.name = name;
        this.content = content;
        this.content.className += Tab.active;
        this.button = null;
    }

    CreateTabButton() {
        const elem = document.createElement("button");
        elem.className = "material-symbols-outlined tabButton " + Tab.btnInactive;
        elem.innerText = this.name;

        elem.addEventListener("click", () => {
            this.SetActive();
        });

        this.button = elem;
        return elem;
    }

    SetActive() {
        Tab.TABS.forEach((tab) => {
            tab.content.className = tab.content.className.replace(Tab.active, Tab.inactive);
            tab.button.className = tab.button.className.replace(Tab.btnActive, Tab.btnInactive);
        });
        this.content.className = this.content.className.replace(Tab.inactive, Tab.active);
        this.button.className = this.button.className.replace(Tab.btnInactive, Tab.btnActive);
    }
}

export default Tab;