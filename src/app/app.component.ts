import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'retala';

  ngOnInit() {
    this.displayNav();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  addRemoveClass(entry: any) {
    var header = document.querySelector("nav");
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled")
    }
  }

  displayNav() {
    var self = this;
    const sectionOne = document.querySelector('header');
    const sectionOneOptions = {
      rootMargin: "-500px 0px 0px 0px"
    }
    const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
      entries.forEach(entry => {
        // this.navComponent.addOrRemoveClass(entry)
        self.addRemoveClass(entry)
      })
    }, sectionOneOptions)

    sectionOneObserver.observe(sectionOne);
  }
}
