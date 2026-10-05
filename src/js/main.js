


const navLinks = document.querySelectorAll(".nav-links a ");


navLinks.forEach(link => {
    if (link.getAttribute("href") === window.location.hash) {
        link.classList.add("active");
    } else{
        link.classList.remove("active");
    }
    link.addEventListener("click", function (event) {
        navLinks.forEach(link => link.classList.remove("active"));
        this.classList.add("active");
    });
    
});

//physics animation//
const {
    Engine,
    Bodies,
    Composite,
    Runner,
    Events,
    Mouse,
    MouseConstraint
} = Matter;


// =========================
// ENGINE
// =========================

const engine = Engine.create();
const world = engine.world;

engine.gravity.y = 1;


// =========================
// ELEMENTS
// =========================

const hero = document.querySelector(".hero");
const physicsArea = document.querySelector(".physics-area");
const title = document.querySelector(".hero-title");
const pills = document.querySelectorAll(".skill-pill");

const pillBodies = [];


// =========================
// CREATE PILLS
// =========================

const skills = [
    "UX/UI",
    "Figma",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "GSAP",
    "Motion Design",
    "Web Development"
];


pills.forEach((pill, index) => {

    const width = pill.offsetWidth;
    const height = pill.offsetHeight;

    const body = Bodies.rectangle(
        Math.random() * physicsArea.clientWidth,
        -100 - index * 100,
        width,
        height,
        {
            restitution: 0.5,
            friction: 0.4,
            frictionAir: 0.01,
            density: 0.001
        }
    );

    pillBodies.push({
        element: pill,
        body: body
    });

    Composite.add(world, body);
});


// =========================
// TITLE COLLISION
// =========================

function createTitleFloor() {

    const physicsRect = physicsArea.getBoundingClientRect();
    const titleRect = title.getBoundingClientRect();

    const x =
        titleRect.left -
        physicsRect.left +
        titleRect.width / 2;

    const y =
        titleRect.top -
        physicsRect.top +
        titleRect.height / 2;

    return Bodies.rectangle(
        x,
        y,
        titleRect.width,
        titleRect.height,
        {
            isStatic: true,
            label: "titleFloor"
        }
    );
}

const titleFloor = createTitleFloor();

Composite.add(world, titleFloor);


// =========================
// WALLS
// =========================

const physicsWidth = physicsArea.clientWidth;
const physicsHeight = physicsArea.clientHeight;

const leftWall = Bodies.rectangle(
    -50,
    physicsHeight / 2,
    100,
    physicsHeight,
    {
        isStatic: true
    }
);

const rightWall = Bodies.rectangle(
    physicsWidth + 50,
    physicsHeight / 2,
    100,
    physicsHeight,
    {
        isStatic: true
    }
);

Composite.add(world, [
    leftWall,
    rightWall
]);


// =========================
// UPDATE HTML POSITIONS
// =========================

Events.on(engine, "afterUpdate", () => {

    pillBodies.forEach(({ element, body }) => {

        element.style.transform = `
            translate(
                ${body.position.x - element.offsetWidth / 2}px,
                ${body.position.y - element.offsetHeight / 2}px
            )
            rotate(${body.angle}rad)
        `;

    });

});


// =========================
// MOUSE DRAGGING
// =========================

const mouse = Mouse.create(physicsArea);

const mouseConstraint = MouseConstraint.create(engine, {

    mouse: mouse,

    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }

});

Composite.add(world, mouseConstraint);


// =========================
// START ENGINE
// =========================

const runner = Runner.create();

Runner.run(runner, engine);

// projecrt management //

console.log(projects);

