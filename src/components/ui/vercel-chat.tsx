"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { TextShimmerWave } from "@/components/ui/text-shimmer-wave";
import { BorderBeam } from "@/components/ui/border-beam";
import {
    ImageIcon,
    FileUp,
    Figma,
    MonitorIcon,
    CircleUserRound,
    ArrowUpIcon,
    Paperclip,
    PlusIcon,
    Mic,
    Image,
    Send,
} from "lucide-react";

interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [textareaHeight, setTextareaHeight] = useState(minHeight);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                setTextareaHeight(minHeight);
                return;
            }

            textarea.style.height = `${minHeight}px`;
            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );

            textarea.style.height = `${newHeight}px`;
            setTextareaHeight(newHeight);
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
            setTextareaHeight(minHeight);
        }
    }, [minHeight]);

    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight, textareaHeight };
}

export function VercelChat() {
    const [value, setValue] = useState("");
    const { textareaRef, adjustHeight, textareaHeight } = useAutoResizeTextarea({
        minHeight: 60,
        maxHeight: 200,
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (value.trim()) {
            // TODO: Implement chat submission logic here
            console.log("Submitting:", value);
            setValue("");
            adjustHeight(true);
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto space-y-8">
            <div className="w-full">
                <div className="bg-black/40 rounded-xl border border-white/10 backdrop-blur-sm p-4">
                    <textarea
                        ref={textareaRef}
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                            adjustHeight();
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask SYNTAI a question..."
                        className="block w-full min-h-[44px] resize-none bg-transparent border border-white/10 rounded-lg p-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:ring-0"
                        style={{
                            height: textareaHeight,
                        }}
                    />

                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="p-2 hover:bg-white/5 rounded-lg transition-all duration-300"
                            >
                                <Mic className="w-4 h-4 text-white/60" />
                            </button>
                            <button
                                type="button"
                                className="p-2 hover:bg-white/5 rounded-lg transition-all duration-300"
                            >
                                <Image className="w-4 h-4 text-white/60" />
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="p-2 hover:bg-white/5 rounded-lg transition-all duration-300"
                        >
                            <Send className="w-4 h-4 text-white/60" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}