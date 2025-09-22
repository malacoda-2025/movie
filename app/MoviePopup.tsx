import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React from 'react'

// Type definition for props
interface MoviePopupProps {
    open: boolean;
    onClose: () => void;
    title: string;
    videoSrc: string;
}

export default function MoviePopup({ open, onClose, title, videoSrc } : MoviePopupProps) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-black rounded-2xl shadow-xl">
                <DialogHeader className="flex justify-between items-center p-4 bg-zinc-900">
                    <DialogTitle className="text-white text-xl font-semibold">{title}</DialogTitle>
                    <Button
                        className="text-white hover:bg-zinc-800 rounded-full"
                        onClick={onClose}
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </DialogHeader>


                {/* Movie player */}
                <div className="relative bg-black flex items-center justify-center">
                    <video
                        src={videoSrc}
                        controls
                        autoPlay
                        className="w-full h-[70vh] object-contain bg-black"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}