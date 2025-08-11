import React, { useState, useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
    const keywords = ['const', 'let', 'var', 'function', 'import', '{', '}', '=>', 'async', 'await', 'return 0;', 'print', 'if', 'else', 'for', 'new', 'int main()', 'def', 'from', 'class', 'public', 'private', 'static', 'void', 'try', 'catch', 'finally', '()', ';', ':', 'export', 'default', '...args', 'React.FC', 'useState'];
    const [animatedKeywords, setAnimatedKeywords] = useState<{ id: number; text: string; top: string; left: string; animationDuration: string; animationDelay: string; }[]>([]);

    useEffect(() => {
        const generatedKeywords = Array.from({ length: 35 }).map((_, index) => ({
            id: index,
            text: keywords[index % keywords.length],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 8}s`, // Faster: 8s to 13s
            animationDelay: `${Math.random() * 10}s`,
        }));
        setAnimatedKeywords(generatedKeywords);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
            <style>
                {`
                @keyframes float {
                    0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                    50% { transform: translateY(-40px) translateX(20px) rotate(10deg); }
                    100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                }
                .float-keyword {
                    opacity: 0;
                    animation-name: float;
                    animation-timing-function: ease-in-out;
                    animation-iteration-count: infinite;
                }
                html:not(.dark) .float-keyword {
                   opacity: 0.15;
                }
                 html.dark .float-keyword {
                   opacity: 0.3;
                }
                `}
            </style>
            {animatedKeywords.map(k => (
                <span
                    key={k.id}
                    className="float-keyword absolute text-emerald-500 dark:text-green-400 font-mono text-sm"
                    style={{
                        top: k.top,
                        left: k.left,
                        animationDuration: k.animationDuration,
                        animationDelay: k.animationDelay,
                    }}
                >
                    {k.text}
                </span>
            ))}
        </div>
    );
};

export default AnimatedBackground;