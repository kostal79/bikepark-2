import React from "react"
import ContentLoader from "react-content-loader"

const ReviewSkeleton = (props) => (
    <ContentLoader 
    speed={2}
    viewBox="0 0 215 112"
    backgroundColor="#ffffff"
    foregroundColor="#9a9996"
    {...props}
  >
    <rect x="7" y="2" rx="10" ry="10" width="207" height="112" />
  </ContentLoader>
)

export default ReviewSkeleton

