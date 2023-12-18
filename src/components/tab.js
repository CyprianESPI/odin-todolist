class Tab {
    static TABS = [];
    static active = "tabActive";
    static inactive = "tabInactive";

    constructor(name, content) {
        this.name = name;
        this.content = content;
        this.content.className += Tab.active;
    }

    CreateTabButton() {
        const elem = document.createElement("button");
        elem.className = "tabButton";
        elem.innerText = this.name;

        elem.addEventListener("click", () => {
            this.SetActive();
        });

        return elem;
    }

    SetActive() {
        Tab.TABS.forEach((tab) => {
            tab.content.className = tab.content.className.replace(Tab.active, Tab.inactive);
        });
        this.content.className = this.content.className.replace(Tab.inactive, Tab.active);
    }
}

export default Tab;