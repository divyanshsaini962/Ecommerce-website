"use client";
import { NextStudio } from "next-sanity/studio";
import sanityConfig from "../../../../sanity.config"


const studio = () => {
  return <NextStudio config={sanityConfig} />
}

export default studio