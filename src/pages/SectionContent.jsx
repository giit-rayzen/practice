import React from 'react';
import { useParams } from 'react-router-dom';

function SectionContent() {
  const { section, subSection } = useParams();

  return (
    <div>
      <h2>{`${section.charAt(0).toUpperCase() + section.slice(1)} - ${subSection}`}</h2>
      <p>This is the content for {subSection} under {section} section.</p>
    </div>
  );
}

export default SectionContent;