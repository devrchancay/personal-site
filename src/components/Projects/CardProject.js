import React from 'react';

const CardProject = ({ name, descriptionHTML, url, forkCount, stargazers }) => {
  return (
    <div className="bg-white shadow-lg p-2 w-full">
      <div className="flex justify-between">
        <div className="">
          <a
            href={url}
            target="__blank"
            className="font-bold hover:underline font-bold"
          >
            {name}
          </a>
        </div>
        <div className="">
          <a href={url} target="__blank" className="">
            <svg
              className="fill-gray-800 hover:fill-blue-400"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
            >
              <title>GitHub icon</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
      </div>
      <div className="w-full py-1">
        <p
          className="text-xs font-sans"
          dangerouslySetInnerHTML={{ __html: descriptionHTML }}
        />
      </div>
      <div className="w-full pt-1 flex flex-start">
        <div className="flex justify-start items-center content-center pr-2">
          <svg
            className="fill-gray-800 hover:fill-blue-400"
            viewBox="0 0 14 16"
            version="1.1"
            width="14"
            height="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
            />
          </svg>
          <span className="pl-1 font-sans">{stargazers.totalCount}</span>
        </div>
        <div className="flex justify-start items-center content-center pr-2">
          <svg
            className="fill-gray-800 hover:fill-blue-400"
            viewBox="0 0 10 16"
            version="1.1"
            width="10"
            height="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
            />
          </svg>
          <span className="pl-1 font-sans">{forkCount}</span>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
