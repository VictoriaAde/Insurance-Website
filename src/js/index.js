class App {
  constructor() {
    this._initialize();
    this._render();
  }

  _initialize() {
    this._setInitialStates();
    this._createLenis();
    this._createIntro();
  }

  _setInitialStates() {
    gsap.set("#hero_section h1", {
      x: -100,
      y: -100,
      opacity: 0,
    });

    gsap.set(".nav_middle_links, .nav_end_links", {
      opacity: 0,
      x: -100,
    });

    gsap.set(".hero_text_one, .hero_text_two, .hero_img_div", {
      opacity: 0,
      y: 100,
    });

    gsap.set(
      ".services_one, .services_two, .services_three, .services_four, .services_five, .services_six",
      {
        y: 100,
        opacity: 0,
        scale: 1,
      }
    );

    gsap.set("#support_section h1, #support_section h2", {
      opacity: 0,
      x: -100,
      y: -100,
    });

    gsap.set(
      ".support_text_one, .support_text_two, .support_text_div button, #support_section img",
      {
        opacity: 0,
        y: 100,
      }
    );

    gsap.set(
      ".calculate_numbers h1, .tab_btn, .tab_content, .links_section div",
      {
        opacity: 0,
        x: -100,
      }
    );

    gsap.set(".links_section div", {
      opacity: 0,
      x: 100,
    });

    gsap.set("#footer div", {
      opacity: 0,
      y: 100,
    });
  }

  _createLenis() {
    this.lenis = new Lenis({
      lerp: 0.1,
    });
  }

  _createIntro() {
    const tl = gsap.timeline();

    tl.to(".nav_middle_links, .nav_end_links", {
      opacity: 1,
      x: 0,
      duration: 2,
      stagger: 0.1,
    })
      .to(
        "#hero_section h1",
        {
          opacity: 1,
          x: 0,
          y: 0,
          ease: "expo.out",
          duration: 2,
          //   stagger: 0.3,
        },
        "-=1"
      )
      .to(
        ".hero_text_one, .hero_text_two, .hero_img_div",
        {
          opacity: 1,
          x: 0,
          ease: "expo.out",
          duration: 2,
        },
        "-=1"
      )
      .to(
        ".services_one, .services_two, .services_three, .services_four, .services_five, .services_six",
        {
          opacity: 1,
          y: 0,
          ease: "expo.out",
          duration: 2,
        },
        "-=1"
      )
      .to(
        "#support_section h1, #support_section h2",
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 2,
          ease: "expo.out",
        },
        "-=1"
      )
      .to(
        ".support_text_one, .support_text_two, .support_text_div button, #support_section img",
        {
          opacity: 1,
          y: 0,
          ease: "expo.out",
          duration: 2,
        },
        "-=1"
      )
      .to(
        ".calculate_numbers h1, .tab_btn, .tab_content",
        {
          opacity: 1,
          x: 0,
          duration: 2,
          stagger: 0.1,
        },
        "-=1"
      )
      .to(
        ".links_section div",
        {
          opacity: 1,
          x: 0,
          duration: 2,
          stagger: 0.1,
        },
        "-=1"
      )
      .to("#footer div", {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.1,
      });
  }

  _render(time) {
    this.lenis.raf(time);

    requestAnimationFrame(this._render.bind(this));
  }
}

new App();
