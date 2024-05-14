import Link from "next/link"

function Form() {
  return (
    <div className="p-5">
      <div className="flex flex-col justify-center w-[350px] mx-auto space-y-6">
        <div className="py-5 lg:hidden">
          <Link href="/">
            <img className="w-[250px] mx-auto" src="/img/codylinkfff.png" alt="Codylink - Aprende Programación en Línea" />
          </Link>
        </div>
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="font-bold text-2xl tracking-tight">Crear una cuenta</h1>
          <p className="text-sm text-[#888]">Ingresa tu email y contraseña para crear una cuenta</p>
        </div>
        <div className="grid gap-6">
          <form>
            <div className="grid gap-4">
              <div className="grid gap-1">
                <label className="text-sm text-[#888]" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  autoCapitalize="none"
                  placeholder="nombre@ejemplo.com"
                  className="flex w-full h-[2.25rem] border border-[#888] rounded-lg bg-transparent py-1 px-3 text-sm placeholder:text-[#888]" />
              </div>
              <div className="grid gap-1">
                <label className="text-sm text-[#888]" htmlFor="password">Contraseña</label>
                <input
                  id="password"
                  type="password"
                  autoComplete="off"
                  placeholder="entre 8 y 23 caracteres"
                  className="flex w-full h-[2.25rem] border border-[#888] rounded-lg bg-transparent py-1 px-3 text-sm placeholder:text-[#888]" />
              </div>
              <div className="grid gap-1">
                <label className="text-sm text-[#888]" htmlFor="matchPassword">Confirmar contraseña</label>
                <input
                  id="matchPassword"
                  type="password"
                  autoComplete="off"
                  placeholder="repita su contraseña"
                  className="flex w-full h-[2.25rem] border border-[#888] rounded-lg bg-transparent py-1 px-3 text-sm placeholder:text-[#888]" />
              </div>
              <button className="bg-[#3872ab] rounded-lg py-2 px-4 text-sm transition-all ease-in-out hover:bg-[#3872ab]/90">Registrarse</button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span class="w-full border-t border-[#888]" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span class="bg-[#080d12] px-2 text-[#888]">o</span>
            </div>
          </div>
          <button className="inline-flex items-center justify-center text-sm font-medium text-[#080d12] py-2 px-4 bg-[#e9e9e9] rounded-lg transition-all ease-in-out hover:bg-[#e9e9e9]/90">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="mr-2 h-4 w-4"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
            Continuar con Google
          </button>
        </div>
        <p className="px-8 text-center text-sm text-[#888]">
          Al continuar, aceptas las{' '}
          <Link className="underline underline-offset-2 hover:text-[#e9e9e9]" href="/condiciones">
            Condiciones de uso
          </Link>{' '}
          y la{' '}
          <Link className="underline underline-offset-2 hover:text-[#e9e9e9]" href="/privacidad">{' '}
            Política de privacidad
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Form