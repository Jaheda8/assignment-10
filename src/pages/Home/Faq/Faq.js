import React from 'react';

const Faq = () => {
    return (
        // faq part start
        <div className='bg-gray-50' id='faq'>
            <hr />
            <section className="px-4 rounded  pt-20 pb-24 mx-auto max-w-7xl md:px-2">
  <h1 className="mb-12 text-2xl font-extrabold text-left text-gray-800 md:text-3xl md:text-center">Frequently Asked <span className='text-blue-800'> Questions</span></h1>
  <div className="flex items-start justify-start mb-12">
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 mr-4 text-gray-700" aria-hidden="true">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
    <div>
      <p className="mt-0 mb-3 font-semibold text-gray-900">What is accessibility?</p>
      <p className="text-gray-600">
        This article starts off the module with a good look at what accessibility is — this includes what groups of people we need to consider and why, what tools different people use to interact with
        the web, and how we can make accessibility part of our web development workflow.
      </p>
    </div>
  </div>
  <div className="flex items-start justify-start mb-12">
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 mr-4 text-gray-700" aria-hidden="true">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
    <div>
      <p className="mt-0 mb-3 font-semibold text-gray-900">CSS and JavaScript accessibility best practices?</p>
      <p className="text-gray-600">
        CSS and JavaScript, when used properly, also have the potential to allow for accessible web experiences, but if misused they can significantly harm accessibility. This article outlines some
        CSS and JavaScript best practices that should be considered to ensure that even complex content is as accessible as possible.
      </p>
    </div>
  </div>
  <div className="flex items-start justify-start mb-12">
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-none w-6 h-6 mr-4 text-gray-700" aria-hidden="true">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
    <div>
      <p className="mt-0 mb-3 font-semibold text-gray-900">WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics?</p>
      <p className="text-gray-600">
        Following on from the previous article, sometimes making complex UI controls that involve unsemantic HTML and dynamic JavaScript-updated content can be difficult. WAI-ARIA is a technology that
        can help with such problems by adding in further semantics that browsers and assistive technologies can recognize and use to let users know what is going on. Here we'll show how to use it at a
        basic level to improve accessibility.
      </p>
    </div>
  </div>
 
</section>

        </div>
    );
};

export default Faq;