import { MdFormatQuote } from 'react-icons/md';

function Card({ review }) {
  return (
    <div className="relative flex flex-col max-w-[calc(1400px/3)] min-h-[250px] m-auto p-5 bg-[#e9e9e9] border border-[#e9e9e9] rounded-lg">
        <MdFormatQuote className="absolute top-[20px] right-[20px] text-[48px] text-[#080d12]" />
        <div className="w-full">
            <div className="flex flex-row items-center gap-2 w-full">
                <div className="text-7xl text-[#080d12]">{review.review_user_profile_pic}</div>
                <div className="flex flex-col w-full">
                    <h3 className="font-bold text-[20px] text-[#080d12]">{review.review_user}</h3>
                    <span className="text-[#888]">{review.review_user_profession}</span>
                </div>
            </div>
        </div>
        <div className="w-full py-5">
            <p className="text-[#080d12]">{review.review}</p>
        </div>
    </div>
  )
}

export default Card