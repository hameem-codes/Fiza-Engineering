import React from "react";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    name: "Understand",
    text: "We define the commercial need, technical specification and market context.",
  },
  {
    number: "02",
    name: "Connect",
    text: "We identify the right manufacturers, specialists, operators and stakeholders.",
  },
  {
    number: "03",
    name: "Structure",
    text: "We align scope, responsibilities, commercial terms and delivery expectations.",
  },
  {
    number: "04",
    name: "Progress",
    text: "We coordinate discussions and documentation towards execution.",
  },
];

export function ProcessSection() {
  return (
    <section className="w-full bg-[#EAE7DF] py-20 md:py-24 border-t border-b border-slab-grey">
      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <h2 className="text-display-lg sm:text-[2.75rem] font-medium text-earth-black leading-[1.08] mb-3">
            How We Work
          </h2>
          <p className="text-quarry-grey text-body-sm leading-relaxed">
            A disciplined, four-phase approach to de-risking and delivering complex industrial infrastructure.
          </p>
        </div>

        {/* 4 Horizontal Cards on Light Background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="bg-iron-white border border-slab-grey p-7 flex flex-col justify-between transition-all duration-200 hover:border-earth-black shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans text-sm font-bold text-oxide-red tracking-wide">
                    {step.number}
                  </span>
                  {idx < 3 && (
                    <span className="hidden lg:block text-slab-grey">
                      <ArrowRight size={16} />
                    </span>
                  )}
                </div>

                <h3 className="text-heading-3 font-medium text-earth-black mb-3">
                  {step.name}
                </h3>

                <p className="text-body-sm text-quarry-grey leading-relaxed">
                  {step.text}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slab-grey/40">
                <span className="text-[10px] font-sans uppercase text-quarry-grey tracking-wide font-medium">
                  Phase {step.number}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
