function Card({ method }) {
  return (
    <div className=" rounded-lg bg-[#e9e9e9] p-5 shadow-2xl">
        <div className="flex items-center justify-center gap-4">
            <div>
                <h5 className="text-[20px] font-light text-[#080d12]">{method.method}</h5>
            </div>
            <div>
                {method.method_logo}
            </div>
        </div>
    </div>
  )
}

export default Card