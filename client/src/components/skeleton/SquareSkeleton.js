import React from 'react';
import ContentLoader from 'react-content-loader'

const CategorySkeleton = (props) => {
    return (
        <ContentLoader
        viewBox="0 0 100% 650"
        height={450}
        width={"100%"}
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
    >
        <rect x="0" y="42" rx="5" ry="5" width="100%" height="200" />
        <rect x="0" y="265" rx="5" ry="5" width="100%" height="10" />
        <rect x="0" y="285" rx="5" ry="5" width="100%" height="10" />
        <rect x="0" y="305" rx="5" ry="5" width="100%" height="10" />
    </ContentLoader>
    );
};

export default CategorySkeleton;