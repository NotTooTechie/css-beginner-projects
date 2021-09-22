window.onload = () => {
    document.getElementById ("justify-content-combo").addEventListener ("change", (e) => {
        let selectedIndex = e.target.selectedIndex;
        let selectedValue = e.target.options[selectedIndex].value;
        document.documentElement.style.setProperty("--flex-justify-content", selectedValue);
    });

    document.getElementById ("align-items-combo").addEventListener ("change", (e) => {
        let selectedIndex = e.target.selectedIndex;
        let selectedValue = e.target.options[selectedIndex].value;
        document.documentElement.style.setProperty("--flex-align-items", selectedValue);
    });

    document.getElementById ("wrap-combo").addEventListener ("change", (e) => {
        let selectedIndex = e.target.selectedIndex;
        let selectedValue = e.target.options[selectedIndex].value;
        document.documentElement.style.setProperty("--flex-wrap", selectedValue);
    });

    document.getElementById ("direction-combo").addEventListener ("change", (e) => {
        let selectedIndex = e.target.selectedIndex;
        let selectedValue = e.target.options[selectedIndex].value;
        document.documentElement.style.setProperty("--flex-direction", selectedValue);
    });
}