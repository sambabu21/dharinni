import { testimonials } from "../../Data"
import { featuredTestimonial } from "../../Data"
import Reveal from "../../Animations/Reveal"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Testimonials() {
    return (
      <div className="relative isolate bg-[#F8FAE5] pb-32 mt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#474033] pt-10 ">TESTIMONIALS</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl ">
              We have worked with thousands of amazing people
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-stone-950 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="rounded-2xl bg-[#F8FAE5] shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-stone-900 sm:p-12 sm:text-xl sm:leading-8">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-[#584c3c] px-6 py-4 sm:flex-nowrap">
                <img
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                  src={featuredTestimonial.author.imageUrl}
                  alt=""
                />
                <div className="flex-auto">
                  <div className="font-semibold">{featuredTestimonial.author.name}</div>
                  <div className="text-stone-900">{`@${featuredTestimonial.author.handle}`}</div>
                </div>
                <img className="h-10 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt="" />
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8'
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="rounded-2xl bg-[#F8FAE5] p-6 shadow-lg ring-1 ring-gray-900/5"
                      >
                        <blockquote className="text-stone-950">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                          <div>
                            <div className="font-semibold">{testimonial.author.name}</div>
                            <div className="text-stone-900">{`@${testimonial.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  