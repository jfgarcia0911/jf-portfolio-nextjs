import React from "react";
import GithubIcon from "@/icon/GithubIcon";
import TriangleIcon from "@/icon/TriangleIcon"
import SemiCircleIcon from "@/icon/SemiCircleIcon"
import LineIcon from "@/icon/LineIcon"
import TwirlIcon from "@/icon/TwirlIcon"
export default function FloatingIcon({positionX, positionY}) {
	return (
    <>
    <div
			style={{
				transform: `translate(${positionX}px, ${positionY}px)`,
				transition: "transform 0.1s ease-out",
			}}
			className="absolute top-1/10 left-2/8"
		>
			<TriangleIcon className="h-7 w-7 text-[#ee1065] " />
		</div>
    <div
			style={{
				transform: `translate(${positionY}px, ${positionX}px)`,
				transition: "transform 0.1s ease-out",
			}}
			className="absolute top-1/10 left-6/8"
		>
			<TriangleIcon className="h-7 w-7 text-[#ee1065] rotate-180" />
		</div>
    <div
			style={{
				transform: `translate(${positionX}px, ${positionY}px)`,
				transition: "transform 0.1s ease-out",
			}}
			className="absolute top-0 left-7/8"
		>
			<SemiCircleIcon className="h-7 w-7 text-[#ee1065] rotate-40" />
		</div>
    <div
			style={{
				transform: `translate(${positionX}px, ${positionY}px)`,
				transition: "transform 0.1s ease-out",
			}}
			className="absolute top-6/8 left-1/32"
		>
			<SemiCircleIcon className="h-7 w-7 text-[#ee1065] rotate-40" />
		</div>
    <div
			style={{
				transform: `translate(${positionX}px, ${positionY}px)`,
				transition: "transform 0.1s ease-out",
			}}
			className="absolute top-0 left-1/8"
		>
			<LineIcon className="h-7 w-7 text-[#ee1065] rotate-40" />
		</div>
    <div
			style={{
				transform: `translate(${positionX}px, ${positionY}px)`,
				transition: "transform 0.1s ease-out",
			}}
			className="absolute top-16/16 left-6/8"
		>
			<LineIcon className="h-7 w-7 text-[#ee1065] rotate-40" />
		</div>
    <div
			style={{
				transform: `translate(${positionY}px, ${positionX}px)`,
				transition: "transform 0.1s ease-out",
			}}
			className="absolute top-50 left-1/16"
		>
			<TwirlIcon className="h-7 w-7 text-[#ee1065] rotate-40" />
		</div>
     <div
			style={{
				transform: `translate(${positionY}px, ${positionX}px)`,
				transition: "transform 0.1s ease-out",
			}}
			className="absolute top-14/16 left-15/16"
		>
			<TwirlIcon className="h-7 w-7 text-[#ee1065] rotate-40" />
		</div>
    </>
		
	);
}
