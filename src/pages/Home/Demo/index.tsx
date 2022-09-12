import React, { useEffect, useState } from 'react';
import LayoutDivider from '~/components/LayoutDivider';
import SvgICon from '~/components/SvgIcon';

const Demo = () => {
  const content = {
    desktop: () => {
      return (
        <div className=" flex max-h-content_h animate-fade_in">
          <div className=" m-auto flex w-auto flex-row">
            <div className="m-auto flex">
              <div className="w-auto space-y-6 text-[#414141]">
                <span className=" flex w-[60%] text-[44px] font-semibold leading-tight tracking-tight">
                  Our new website is on its way.
                </span>
                <div className="space-y-3 text-lg">
                  <p>Sign up to be the first</p>
                  <p>to know when we launch.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-sm">Enter your email here*</div>
                  <input
                    className="border-b border-b-[#414141] outline-0"
                    placeholder="email"
                  />
                </div>
                <div>
                  <button className="h-9 w-1/4 bg-[#414141] text-sm text-white">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>

            <img
              className="max-h-content_h w-1/2"
              src="https://static.wixstatic.com/media/45d10e_187e077f527448b3afe5d2fc52a9d4f8~mv2_d_2890_3648_s_4_2.jpg/v1/fill/w_490,h_1079,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/45d10e_187e077f527448b3afe5d2fc52a9d4f8~mv2_d_2890_3648_s_4_2.jpg"
            />
          </div>
        </div>
      );
    },
    mobile: () => {
      return (
        <div className=" flex max-h-content_h animate-fade_in">
          <div className=" m-auto flex w-auto flex-row">
            <div className="m-auto flex">
              <div className="w-auto space-y-6 text-[#414141]">
                <span className=" flex w-[60%] text-[44px] font-semibold leading-tight tracking-tight">
                  Our new website is on its way.
                </span>
                <div className="space-y-3 text-lg">
                  <p>Sign up to be the first</p>
                  <p>to know when we launch.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-sm">Enter your email here*</div>
                  <input
                    className="border-b border-b-[#414141] outline-0"
                    placeholder="email"
                  />
                </div>
                <div>
                  <button className="h-9 w-1/4 bg-[#414141] text-sm text-white">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>

            <img
              className="max-h-content_h w-1/2"
              src="https://static.wixstatic.com/media/45d10e_187e077f527448b3afe5d2fc52a9d4f8~mv2_d_2890_3648_s_4_2.jpg/v1/fill/w_490,h_1079,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/45d10e_187e077f527448b3afe5d2fc52a9d4f8~mv2_d_2890_3648_s_4_2.jpg"
            />
          </div>
        </div>
      );
    },
  };

  return <LayoutDivider {...content} />;
};
export default Demo;
