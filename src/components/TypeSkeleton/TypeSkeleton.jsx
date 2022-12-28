import React from "react"
import ContentLoader from "react-content-loader"

const TypeSkeleton = () => (
    <ContentLoader 
    speed={2}
    width={220}
    height={220}
    viewBox="0 0 220 220"
    backgroundColor="#ffffff"
    foregroundColor="#babdb6"
  >
    <rect x="7" y="103" rx="10" ry="10" width="207" height="112" /> 
  </ContentLoader>
)

export default TypeSkeleton

