import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  tech = [],
}) => {
  return (
    <div
      className="
        group relative
        rounded-2xl overflow-hidden
        bg-[#181818]
        shadow-md
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      {/* IMAGE */}
      <div
        className="relative w-full h-[200px] md:h-[230px]"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* OVERLAY */}
        <div
          className="
            absolute inset-0
            flex items-center justify-center gap-4
            bg-black/60 backdrop-blur-sm
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        >
          <Link
            href={gitUrl}
            target="_blank"
            className="
              h-12 w-12 flex items-center justify-center
              rounded-full border border-white/40
              hover:border-white transition
            "
          >
            <CodeBracketIcon className="h-6 w-6 text-white" />
          </Link>

          <Link
            href={previewUrl}
            target="_blank"
            className="
              h-12 w-12 flex items-center justify-center
              rounded-full border border-white/40
              hover:border-white transition
            "
          >
            <EyeIcon className="h-6 w-6 text-white" />
          </Link>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h5 className="text-lg font-semibold text-white tracking-wide">
          {title}
        </h5>

        {/* TECH STACK CHIPS */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tech.map((item, index) => (
            <span
              key={index}
              className="
                text-xs px-3 py-1
                rounded-full
                bg-white/10 text-[#ADB7BE]
                border border-white/10
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Optional description */}
        {description && (
          <p className="mt-3 text-sm text-[#ADB7BE]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
