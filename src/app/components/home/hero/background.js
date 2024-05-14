import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true)
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container)
    }

    const options = useMemo(() => ({
        fpsLimit: 60,
        interactivity: {
            detectsOn: "canvas",
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                },
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#e9e9e9",
            },
            links: {
                color: "#e9e9e9",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce"
                },
                speed: 0.2,
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "square",
            },
            size: {
                random: false,
                value: 2,
            },
        },
        detectRetina: true,
    }))

    return (
        <Particles
            id="tsparticles"
            init={particlesLoaded}
            options={options}
        />
    );
};

export default ParticlesComponent;