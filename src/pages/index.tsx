import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const drawCanvas = () => {
    const canvas = canvasRef.current;

    if (canvas !== null) {
      const ctx = canvas.getContext("2d");
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const dotDensity = 30; //lower is more dense
      const mouseRadius = 0.09; //as percent of canvas
      const centerRadius = 0.15; //percentage radius where dots shirnk faster

      const DOTS = Math.ceil(
        ((canvas.width + dotDensity) / dotDensity) *
          ((canvas.height + dotDensity) / dotDensity)
      );
      console.log(
        "canvas width: " +
          canvas.width +
          `\n` +
          "canvas height: " +
          canvas.height +
          `\n` +
          "DOTS: " +
          DOTS
      );
      const center = { x: canvas.width / 2, y: canvas.height / 2 };

      if (ctx !== null) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        let xCord = (canvas.width % dotDensity) / 2;
        let yCord = (canvas.height % dotDensity) / 2;

        for (let i = 0; i < DOTS; i++) {
          let radius = 0; // set radius to 0 for each dot initially

          let distanceFromCenter = Math.sqrt(
            (xCord - center.x) ** 2 + (yCord - center.y) ** 2
          );
          let distanceFromMouse = Math.sqrt(
            (xCord - mousePos.x) ** 2 + (yCord - mousePos.y) ** 2
          );

          if (distanceFromCenter < centerRadius * canvas.width) {
            // increase factor of shrink if 20% to center
            radius = (10 * distanceFromCenter) / canvas.width / 2;
          } else {
            radius = (10 * distanceFromCenter) / canvas.width;
          }

          if (distanceFromMouse < mouseRadius * canvas.width) {
            //draw attracted dot
            //distanceFromMouse / (canvas.width * mouseRadius))
            ctx.beginPath();
            ctx.arc(
              (xCord * (mouseRadius - Math.abs(xCord - mousePos.x)) +
                mousePos.x) /
                (mouseRadius - Math.abs(xCord - mousePos.x) + 1),
              (yCord * (mouseRadius - Math.abs(yCord - mousePos.y)) +
                mousePos.y) /
                (mouseRadius - Math.abs(xCord - mousePos.y) + 1),
              radius,
              0,
              2 * Math.PI
            );
            ctx.fillStyle = "#e6e6e6";
            ctx.fill();
            ctx.closePath();
          } else {
            //else draw a stationary dot

            ctx.beginPath();
            ctx.arc(xCord, yCord, radius, 0, 2 * Math.PI);
            ctx.fillStyle = "#e6e6e6";
            ctx.fill();
            ctx.closePath();
          }

          xCord += dotDensity;

          if (xCord > canvas.width) {
            yCord += dotDensity;
            xCord = (canvas.width % dotDensity) / 2;
          }
        }

        requestRef.current = requestAnimationFrame(drawCanvas);
      }
    }
  };

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (canvasRef.current !== null) {
        const rect = canvasRef.current.getBoundingClientRect();
        setMousePos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    requestRef.current = requestAnimationFrame(drawCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [mousePos]);

  const router = useRouter();

  return (
    <>
      <header className={styles.jumbotron}>
        <div className={styles.headerText}>
          <h1>ZACH BARNES</h1>
          <h3>SOFTWARE ENGINEER</h3>
        </div>
        <canvas
          ref={canvasRef}
          className={styles.canvasJumbotron}
          onResize={() => drawCanvas()}
        ></canvas>
      </header>
      <main>
        <section className={styles.mainButtons}>
          <button onClick={() => router.push("/about")}>About</button>
          <button onClick={() => router.push("/work")}>Work</button>
          <button onClick={() => router.push("/contact")}>Contact</button>
        </section>
        <section className={styles.secondaryButtons}>
          <button onClick={() => router.push("https://github.com/zbarnz")}>
            <GitHub fontSize="large" />
          </button>
          <button
            onClick={() =>
              router.push("https://www.linkedin.com/in/zach-barnes-92436614b/")
            }
          >
            <LinkedIn fontSize="large" />
          </button>
        </section>
      </main>
      <footer className={styles.copyright}>
        <p>© Zach Barnes 2023.</p>
      </footer>
    </>
  );
}
