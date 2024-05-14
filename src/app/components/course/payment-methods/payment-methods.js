import Card from "@/app/ui/method-card/card";
import { MdGppGood, MdCreditCard } from "react-icons/md";
import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

function PaymentMethods() {

  const methods = [
    {
      method: "Visa",
      method_logo: <FaCcVisa className="text-[40px] text-[#080d12]" />
    },
    {
      method: "Mastercard",
      method_logo: <FaCcMastercard className="text-[40px] text-[#080d12]" />
    },
    {
      method: "American Express",
      method_logo: <SiAmericanexpress className="text-[40px] text-[#080d12]" />
    },
    {
      method: "PayPal",
      method_logo: <FaPaypal className="text-[40px] text-[#080d12]" />
    }
  ]

  return (
    <section className="relative w-full pb-[100px]">
      <div className="relative max-w-[1400px] mx-auto p-10 bg-[#e9e9e9]">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <h3 className="text-[60px] text-[#080d12] font-bold leading-tight tracking-tighter mb-[20px]">Métodos de pago</h3>
            <div className="flex items-center gap-2 mb-[10px]">
              <MdCreditCard className="text-[#080d12] text-[30px]" />
              <p className="text-[#080d12] md:text-[28px] font-light">Paga con tarjeta de crédito o débito.</p>
            </div>
            <div className="flex items-center gap-2 mb-[10px]">
              <MdGppGood className="text-[#080d12] text-[30px]" />
              <p className="text-[#080d12] md:text-[28px] font-light">Máxima seguridad</p>
            </div>
            <p className="text-[14px] md:text-base text-[#080d12] font-light">Tus datos están totalmente protegidos por nuestro sistema de seguridad.</p>
          </div>
          <div className="w-full mt-[60px] lg:w-1/2 lg:mt-0">
            <div className="grid md:grid-cols-2 p-[50px] gap-4 bg-[#3872ab] rounded-lg shadow-xl">
              {methods.map((method, index) => (
                <Card key={index} method={method} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentMethods