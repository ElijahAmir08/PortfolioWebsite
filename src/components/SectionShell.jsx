import PropTypes from "prop-types";
import Sprite from "./Sprite";

// Define a reusable section component that can be used to create different sections of the portfolio, such as skills, projects, etc. 
// It accepts props for id, title, children (content), additional class names for styling, and an array of sprites to render within the section.
export default function SectionShell({
    id,
    title,
    children,
    className = "",
    innerClassName = "",
    sprites = [],
}) {
    return (
        <section id={id} className={'max-w-6xl mx-auto px-6 py-12 ${className}'}>
            <div
                className={'relative overflow-visible rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 pt-10 ${innerClassName}'}
            >
                {sprites.map((sprite, index) => (
                    <Sprite key={'${id}-${sprite.name || "sprite"}-${index}'}{...sprite} />
                ))}
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">{title}</h3>
                {children}
            </div>
        </section>
    );
}

SectionShell.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    innerClassName: PropTypes.string,
    sprites: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            delay: PropTypes.string,
            size: PropTypes.string,
            left: PropTypes.string,
            right: PropTypes.string,
            center: PropTypes.bool,
        })
    ),
};