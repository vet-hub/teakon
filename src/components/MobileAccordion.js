import { useParams } from "react-router-dom";

export default function MobileAccordion({ tee }) {
    return (
        <div className="my-4 md:hidden">
            {/* Beschreibung */}
            <div tabIndex={0} className="text-primary-content bg-[#4B6C58] my-2 collapse collapse-arrow border border-base-300  rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    Beschreibung:
                </div>
                <div className="collapse-content">
                    <p>{tee.teebeschreibung[0]}</p>
                </div>
            </div>
            {/* Nährstoffe */}
            <div tabIndex={0} className="text-primary-content my-2 collapse collapse-arrow border border-base-300 bg-[#649165] rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    Nährstoffe:
                </div>
                <ul className="collapse-content">
                    {tee.naerhstoffename.map((naehrstoff, i) => {
                        return (
                            <li key={i}>{naehrstoff}</li>
                        )
                    })}
                </ul>
            </div>
            {/* Zubereitung */}
            <div tabIndex={0} className="text-primary-content my-2 collapse collapse-arrow border border-base-300 bg-[#8ab66c] rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    Zubereitung:
                </div>
                <div className="collapse-content">
                    <p>{tee.teezubereitung[0]}</p>
                </div>
            </div>
            {/* Nebenwirkungen */}
            <div tabIndex={0} className="text-gray-500 my-2 collapse collapse-arrow border border-base-300 bg-[#bcd96e] rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    Nebenwirkungen:
                </div>
                <div className="collapse-content ">
                    <ul>
                        {tee.nebenwirkungenname.map((nebenwirkung, i) => {
                            return (
                                <li key={i}>{nebenwirkung}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            {/* Benefits */}
            <div tabIndex={0} className="text-black my-2 collapse collapse-arrow border border-base-300 bg-[#fafa6e] rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    Benefits:
                </div>
                <div className="collapse-content">
                    <ul>
                        {tee.benefitsname.map((benefit, i) => {
                            return (
                                <li key={i}>{benefit}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}