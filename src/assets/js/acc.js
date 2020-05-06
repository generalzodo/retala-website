const tabHeadings = document.querySelectorAll('.heading');

for (let tabHeading of tabHeadings) {
  tabHeading.addEventListener('click', function () {
    let tabSign = this.firstElementChild;
    let openTab = this.nextElementSibling;
    let tabHeight = openTab.clientHeight;

    if (tabHeight > 0) {
      openTab.style.height = "0px";
      openTab.style.padding = "0px 10px";
      openTab.style.borderWidth = "0px";
      tabSign.innerHTML = "&oplus;";
    } else {
      openTab.style.height = "auto";
      openTab.style.padding = "20px 10px";
      openTab.style.borderWidth = "1px";
      tabSign.innerHTML = "&ominus;";
    }
  });
}
