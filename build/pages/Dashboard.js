import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const onViewText1Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onImage83IconClick = useCallback(() => {
    navigate("/live-tracking");
  }, [navigate]);

  const onImage84IconClick = useCallback(() => {
    navigate("/nft-collection");
  }, [navigate]);

  return (
    <div className="relative rounded-xl bg-gray-600 w-full h-[720px] overflow-hidden text-left text-sm text-txt-active font-subtitulos">
      <div className="absolute top-[0px] left-[68px] w-[300px] h-[720px] text-xl">
        <div className="absolute top-[0px] left-[0px] bg-gray-800 [backdrop-filter:blur(30px)] w-[300px] h-[720px]" />
        <b className="absolute top-[36px] left-[24px] text-9xl inline-block w-[252px]">
          Assurance Gateway
        </b>
        <div className="absolute top-[140px] left-[24px] w-[252px] h-12 text-sm text-txt-desactive">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkslategray-200" />
          <img
            className="absolute h-[43.13%] w-[8.21%] top-[27.08%] right-[85.04%] bottom-[29.79%] left-[6.75%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group.svg"
          />
          <div className="absolute w-[48.41%] top-[31.25%] left-[20.63%] font-medium inline-block">
            Search
          </div>
        </div>
        <div className="absolute top-[239px] left-[12px] rounded-xl bg-darkgray w-[276px] flex flex-row items-start justify-start py-2 px-6 box-border gap-[16px]">
          <div className="relative rounded-9xl bg-silver-100 w-7 h-7" />
          <div className="relative flex items-center w-[117px] h-7 shrink-0">
            Tickets
          </div>
        </div>
        <div className="absolute top-[291px] left-[12px] rounded-xl w-[276px] flex flex-row items-start justify-start py-2 px-6 box-border gap-[16px]">
          <div className="relative rounded-9xl bg-silver-100 w-7 h-7" />
          <div className="relative flex items-center w-[185px] h-7 shrink-0">
            Parcels
          </div>
        </div>
        <div className="absolute top-[343px] left-[12px] rounded-xl w-[276px] flex flex-row items-start justify-start py-2 px-6 box-border gap-[16px]">
          <div className="relative rounded-9xl bg-silver-100 w-7 h-7" />
          <div className="relative flex items-center w-[117px] h-7 shrink-0">
            Delivery
          </div>
        </div>
        <div className="absolute top-[395px] left-[12px] rounded-xl w-[276px] flex flex-row items-start justify-start py-2 px-6 box-border gap-[16px]">
          <div className="relative rounded-9xl bg-silver-100 w-7 h-7" />
          <div className="relative flex items-center w-[194px] h-7 shrink-0">
            Raw Materials
          </div>
        </div>
        <div className="absolute h-[6.67%] w-[84%] top-[90%] right-[8%] bottom-[3.33%] left-[8%] rounded-xl bg-gray-100 [backdrop-filter:blur(20px)] text-sm">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div className="absolute h-[33.33%] w-[61.9%] top-[33.33%] left-[28.57%] font-medium inline-block">
            Upload
          </div>
          <img
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[80.95%] bottom-[25%] left-[9.52%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bipluslg.svg"
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[68px] h-[720px] text-txt-desactive">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-1100 [backdrop-filter:blur(20px)]" />
        <img
          className="absolute h-[3.33%] w-[35.29%] top-[4.86%] right-[32.35%] bottom-[91.81%] left-[32.35%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/healthiconscityworkeroutline2.svg"
        />
        <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] rounded-4xs bg-darkslategray-100 h-20" />
        <img
          className="absolute w-[70.59%] right-[14.71%] bottom-[16px] left-[14.71%] rounded-31xl max-w-full overflow-hidden h-12 object-cover hidden"
          alt=""
          src="/rectangle-6@2x.png"
        />
        <div className="absolute h-[6.67%] w-[64.71%] top-[16.94%] right-[17.65%] bottom-[76.39%] left-[17.65%] rounded-xl bg-mediumslateblue-100 [backdrop-filter:blur(20px)]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <img
            className="absolute h-3/6 w-[54.55%] top-[25%] right-[22.73%] bottom-[25%] left-[22.73%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/ggworkalt.svg"
          />
        </div>
        <div className="absolute h-[6.67%] w-[64.71%] top-[70.97%] right-[17.65%] bottom-[22.36%] left-[17.65%] rounded-xl">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkslategray-500" />
          <div className="absolute h-[33.33%] w-[72.5%] top-[33.33%] left-[11.59%] font-medium hidden">
            E
          </div>
        </div>
        <div className="absolute h-[6.67%] w-[64.71%] top-[78.75%] right-[17.65%] bottom-[14.58%] left-[17.65%] rounded-xl">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div className="absolute h-[33.33%] w-[72.5%] top-[33.33%] left-[11.59%] font-medium hidden">
            Cuenta
          </div>
        </div>
        <img
          className="absolute h-[6.67%] w-[64.71%] top-[24.72%] right-[17.65%] bottom-[68.61%] left-[17.65%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/component-3.svg"
        />
        <img
          className="absolute h-[6.67%] w-[64.71%] top-[40.28%] right-[17.65%] bottom-[53.06%] left-[17.65%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/component-4.svg"
        />
        <div className="absolute h-[6.67%] w-[64.71%] top-[48.06%] right-[17.65%] bottom-[45.28%] left-[17.65%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <img
            className="absolute h-3/6 w-[54.55%] top-[25%] right-[22.73%] bottom-[25%] left-[22.73%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/fluenthistory24filled.svg"
          />
        </div>
        <div className="absolute h-[6.67%] w-[64.71%] top-[55.83%] right-[17.65%] bottom-[37.5%] left-[17.65%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <img
            className="absolute h-3/6 w-[54.55%] top-[25%] right-[22.73%] bottom-[25%] left-[22.73%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/healthiconscityworkeroutline2.svg"
          />
        </div>
        <img
          className="absolute h-[6.67%] w-[64.71%] top-[63.61%] right-[17.65%] bottom-[29.72%] left-[17.65%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/healthiconscityworkeroutline2.svg"
        />
        <div className="absolute h-[6.67%] w-[64.71%] top-[32.5%] right-[17.65%] bottom-[60.83%] left-[17.65%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <img
            className="absolute h-3/6 w-[54.55%] top-[25%] right-[22.73%] bottom-[25%] left-[22.73%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bitruck.svg"
          />
        </div>
      </div>
      <img
        className="absolute h-[3.26%] w-[1.84%] top-[4.86%] right-[96.45%] bottom-[91.88%] left-[1.72%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[125px] left-[408px] rounded-6xl bg-gray-1000 [backdrop-filter:blur(4px)] w-[832px] h-[595px] overflow-auto">
        <div className="absolute h-[10.18%] w-[18.62%] top-[109.48%] right-[47.43%] bottom-[-19.66%] left-[33.95%] rounded-xl bg-deepskyblue-100 [backdrop-filter:blur(20px)] text-primary-color">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div className="absolute h-[33.33%] w-[43.51%] top-[33.33%] left-[38.8%] font-medium inline-block">
            Proveedor
          </div>
          <img
            className="absolute h-3/6 w-[14.14%] top-[25.08%] right-[68.24%] bottom-[24.92%] left-[17.62%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bipluslg1.svg"
          />
        </div>
        <div className="absolute h-[10.18%] w-[18.62%] top-[142.42%] right-[47.32%] bottom-[-52.61%] left-[34.06%] rounded-xl bg-deepskyblue-100 [backdrop-filter:blur(20px)] text-primary-color">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div className="absolute h-[33.33%] w-[43.51%] top-[33.33%] left-[38.8%] font-medium inline-block">
            Proveedor
          </div>
          <img
            className="absolute h-3/6 w-[14.14%] top-[25.08%] right-[68.24%] bottom-[24.92%] left-[17.62%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bipluslg1.svg"
          />
        </div>
        <div className="absolute h-[10.18%] w-[18.62%] top-[146.29%] right-[76.67%] bottom-[-56.47%] left-[4.71%] rounded-xl bg-deepskyblue-100 [backdrop-filter:blur(20px)] text-primary-color">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div className="absolute h-[33.33%] w-[43.51%] top-[33.33%] left-[38.8%] font-medium inline-block">
            Proveedor
          </div>
          <img
            className="absolute h-3/6 w-[14.14%] top-[25.08%] right-[68.24%] bottom-[24.92%] left-[17.62%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bipluslg1.svg"
          />
        </div>
        <div className="absolute top-[464px] left-[597px] w-[195px] h-[118px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-bg-card w-[195px] h-[118px]" />
          <div className="absolute top-[18px] left-[18px] font-medium inline-block w-[159px]">
            TRANSPORT COMPANY AVE FENIX S.A.C.
          </div>
          <div className="absolute top-[86px] left-[0px] rounded-t-none rounded-b-xl bg-bg-dark-2 w-[195px] h-8" />
          <img
            className="absolute top-[94px] left-[167px] w-4 h-4 overflow-hidden"
            alt=""
            src="/biarrowupshort.svg"
          />
          <div className="absolute top-[94px] left-[126px] text-xs font-medium text-txt-desactive">
            Block
          </div>
        </div>
        <div className="absolute top-[216px] left-[305px] w-[195px] h-[83px]">
          <div className="absolute top-[-97px] left-[0px] rounded-xl bg-bg-card w-[195px] h-[85px]" />
          <div className="absolute top-[-97px] left-[-273px] rounded-xl bg-bg-card w-[195px] h-[85px]" />
          <div className="absolute top-[455px] left-[-273px] rounded-xl bg-bg-card w-[195px] h-[85px]" />
          <a
            className="absolute top-[-79px] left-[18px] font-medium text-[inherit] inline-block w-[159px] [text-decoration:none]"
            href={`https://www.google.com/search?hl=en&sca_esv=573619808&cs=1&q=gati+ltd&stick=H4sIAAAAAAAAAOMwVGI0iFLMzEvJTMxTKC4tKMipVEjOSMwEcjIyCwoy89IVcjKLS34xSrsV5ecqFOeXFiWnFiskJhflFxcrlGSkKpSnJv1i4oh39QvxDImM38DC-IpFlotXP13f0DCtKs20MD3HRIjHPbEkU8EnMzezJDXlFQsPF5d-rr5BcoFpSQGQy83FCeIaGRpYmL1i4YdqTjfITjE0Ms1GiCRV5pakVyQXvmLh4uIA6ci2LDaEm2YWX2ZZkoNQnZZdWZlUnp2CbGK6SZmxaSGaSF5Z1isWA4ghprllyWbGQkohYcEKwZDQcAaHRnB-TmlJZn5eMcIXvFzcIEOMjIyqMgzLEYYmG5ZnpRTkGcBdZlRWVVyet4iVIx0UCjklKbfYJBkOXMlc8kZd6nfo47MS8ezMa9q95dwzmNhvAwDgXG-2kgEAAA&sa=X&ved=2ahUKEwj25rLYtfiBAxUP9zgGHe3AAb0Q7fAIegQIABBb`}
            target="_blank"
          >
            Gati Limited
          </a>
          <div className="absolute top-[-79px] left-[-255px] font-medium inline-block w-[159px]">
            Madic Iberia
          </div>
          <div className="absolute top-[473px] left-[-255px] font-medium inline-block w-[159px]">
            Kinedyne
          </div>
          <div className="absolute top-[-44px] left-[0px] rounded-t-none rounded-b-xl bg-bg-dark-2 w-[195px] h-8" />
          <div className="absolute top-[-44px] left-[-273px] rounded-t-none rounded-b-xl bg-bg-dark-2 w-[195px] h-8" />
          <div className="absolute top-[508px] left-[-273px] rounded-t-none rounded-b-xl bg-bg-dark-2 w-[195px] h-8" />
          <img
            className="absolute top-[-36px] left-[167px] w-4 h-4 overflow-hidden"
            alt=""
            src="/biarrowupshort.svg"
          />
          <img
            className="absolute top-[-36px] left-[-106px] w-4 h-4 overflow-hidden"
            alt=""
            src="/biarrowupshort.svg"
          />
          <img
            className="absolute top-[516px] left-[-106px] w-4 h-4 overflow-hidden"
            alt=""
            src="/biarrowupshort.svg"
          />
          <div className="absolute top-[-36px] left-[126px] text-xs font-medium text-txt-desactive">
            View
          </div>
          <div
            className="absolute top-[-36px] left-[-147px] text-xs font-medium text-txt-desactive cursor-pointer"
            onClick={onViewText1Click}
          >
            View
          </div>
          <div className="absolute top-[516px] left-[-147px] text-xs font-medium text-txt-desactive">
            Visitar
          </div>
        </div>
        <div className="absolute top-[298px] left-[305px] rounded-xl bg-bg-card w-[195px] h-[85px]" />
        <div className="absolute top-[299px] left-[32px] rounded-xl bg-bg-card w-[195px] h-[85px]" />
        <div className="absolute top-[480px] left-[32px] rounded-xl bg-bg-card w-[195px] h-[85px]" />
        <div className="absolute top-[316px] left-[323px] font-medium inline-block w-[159px]">
          Scania Services del Peru S.A
        </div>
        <div className="absolute top-[317px] left-[50px] font-medium inline-block w-[159px]">
          Scania Hispana S.A.
        </div>
        <div className="absolute top-[498px] left-[50px] font-medium inline-block w-[159px]">
          Distribuciones Diesel Peru S.A.C
        </div>
        <div className="absolute top-[368px] left-[305px] rounded-t-none rounded-b-xl bg-bg-dark-2 w-[195px] h-8" />
        <div className="absolute top-[369px] left-[32px] rounded-t-none rounded-b-xl bg-bg-dark-2 w-[195px] h-8" />
        <div className="absolute top-[550px] left-[32px] rounded-t-none rounded-b-xl bg-bg-dark-2 w-[195px] h-8" />
        <img
          className="absolute top-[376px] left-[472px] w-4 h-4 overflow-hidden"
          alt=""
          src="/biarrowupshort.svg"
        />
        <img
          className="absolute top-[377px] left-[199px] w-4 h-4 overflow-hidden"
          alt=""
          src="/biarrowupshort.svg"
        />
        <img
          className="absolute top-[558px] left-[199px] w-4 h-4 overflow-hidden"
          alt=""
          src="/biarrowupshort.svg"
        />
        <div className="absolute top-[376px] left-[431px] text-xs font-medium text-txt-desactive">
          View
        </div>
        <div className="absolute top-[377px] left-[158px] text-xs font-medium text-txt-desactive">
          View
        </div>
        <div className="absolute top-[558px] left-[158px] text-xs font-medium text-txt-desactive">
          View
        </div>
        <div className="absolute top-[436px] left-[300px] rounded-xl bg-bg-card w-[195px] h-[85px]" />
        <div className="absolute top-[646px] left-[305px] rounded-xl bg-bg-card w-[195px] h-[85px]" />
        <div className="absolute top-[842px] left-[306px] rounded-xl bg-bg-card w-[195px] h-[85px]" />
        <div className="absolute top-[865px] left-[38px] rounded-xl bg-bg-card w-[195px] h-[85px]" />
        <div className="absolute top-[454px] left-[318px] font-medium inline-block w-[159px]">
          Nakamine Imports E.I.R.L.
        </div>
        <div className="absolute top-[664px] left-[323px] font-medium inline-block w-[159px]">
          Implementos Peru S.A.C.
        </div>
        <div className="absolute top-[860px] left-[324px] font-medium inline-block w-[159px]">
          Marco Peruana S A | Marco
        </div>
        <div className="absolute top-[883px] left-[56px] font-medium inline-block w-[159px]">
          Servicios Generales Thermo King
        </div>
        <div className="absolute top-[506px] left-[300px] rounded-t-none rounded-b-xl bg-bg-dark-2 w-[195px] h-8" />
        <div className="absolute top-[716px] left-[305px] rounded-t-none rounded-b-xl bg-bg-dark-2 w-[195px] h-8" />
        <div className="absolute top-[912px] left-[306px] rounded-t-none rounded-b-xl bg-bg-dark-2 w-[195px] h-8" />
        <div className="absolute top-[935px] left-[38px] rounded-t-none rounded-b-xl bg-bg-dark-2 w-[195px] h-8" />
        <img
          className="absolute top-[514px] left-[467px] w-4 h-4 overflow-hidden"
          alt=""
          src="/biarrowupshort.svg"
        />
        <img
          className="absolute top-[724px] left-[472px] w-4 h-4 overflow-hidden"
          alt=""
          src="/biarrowupshort.svg"
        />
        <img
          className="absolute top-[920px] left-[473px] w-4 h-4 overflow-hidden"
          alt=""
          src="/biarrowupshort.svg"
        />
        <img
          className="absolute top-[943px] left-[205px] w-4 h-4 overflow-hidden"
          alt=""
          src="/biarrowupshort.svg"
        />
        <div className="absolute top-[514px] left-[426px] text-xs font-medium text-txt-desactive">
          View
        </div>
        <div className="absolute top-[724px] left-[431px] text-xs font-medium text-txt-desactive">
          Visitar
        </div>
        <div className="absolute top-[920px] left-[432px] text-xs font-medium text-txt-desactive">
          Visitar
        </div>
        <div className="absolute top-[943px] left-[164px] text-xs font-medium text-txt-desactive">
          Visitar
        </div>
        <div className="absolute top-[150px] left-[879px] w-[195px] h-[85px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-bg-card w-[195px] h-[85px]" />
          <div className="absolute top-[18px] left-[18px] font-medium inline-block w-[159px]">
            Clientes naturales
          </div>
          <div className="absolute top-[53px] left-[0px] rounded-t-none rounded-b-xl bg-bg-dark-2 w-[195px] h-8" />
          <img
            className="absolute top-[61px] left-[167px] w-4 h-4 overflow-hidden"
            alt=""
            src="/biarrowupshort.svg"
          />
          <div className="absolute top-[61px] left-[107px] text-xs font-medium text-txt-desactive">
            Ver todos
          </div>
        </div>
        <div className="absolute top-[188px] left-[788px] w-[95px] h-[334px]">
          <div className="absolute h-[2.4%] w-[8.42%] top-[97.6%] right-[91.58%] bottom-[0%] left-[0%] rounded bg-bg-card box-border border-[1px] border-solid border-mediumslateblue-200" />
          <img
            className="absolute h-[98.17%] w-[84.21%] top-[0.9%] right-[8.42%] bottom-[0.93%] left-[7.37%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-1.svg"
          />
          <div className="absolute h-[2.4%] w-[8.42%] top-[0%] right-[0%] bottom-[97.6%] left-[91.58%] rounded bg-bg-card box-border border-[1px] border-solid border-mediumslateblue-200" />
        </div>
        <div className="absolute top-[188px] left-[788px] w-[95px] h-[334px]">
          <div className="absolute h-[2.4%] w-[8.42%] top-[97.6%] right-[91.58%] bottom-[0%] left-[0%] rounded bg-bg-card box-border border-[1px] border-solid border-mediumslateblue-200" />
          <img
            className="absolute h-[98.17%] w-[84.21%] top-[0.9%] right-[8.42%] bottom-[0.93%] left-[7.37%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-1.svg"
          />
          <div className="absolute h-[2.4%] w-[8.42%] top-[0%] right-[0%] bottom-[97.6%] left-[91.58%] rounded bg-bg-card box-border border-[1px] border-solid border-mediumslateblue-200" />
        </div>
        <div className="absolute h-[58.66%] w-[12.98%] top-[25.38%] right-[14.54%] bottom-[15.97%] left-[72.48%] [transform:_rotate(180deg)] [transform-origin:0_0]">
          <div className="absolute h-[2.41%] w-[8.43%] top-[97.59%] right-[91.57%] bottom-[0%] left-[0%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-200" />
          <img
            className="absolute h-[98.11%] w-[85.09%] top-[0.92%] right-[107.31%] bottom-[0.97%] left-[-92.41%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-11.svg"
          />
          <div className="absolute h-[2.41%] w-[8.43%] top-[0%] right-[183.15%] bottom-[97.59%] left-[-91.57%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-200" />
        </div>
        <div className="absolute h-[67.56%] w-[12.98%] top-[150.25%] right-[14.54%] bottom-[-117.82%] left-[72.48%] [transform:_rotate(180deg)] [transform-origin:0_0]">
          <div className="absolute h-[2.39%] w-[8.43%] top-[-97.61%] right-[91.57%] bottom-[195.22%] left-[0%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-200" />
          <img
            className="absolute h-[24.6%] w-[85.19%] top-[-98.98%] right-[107.22%] bottom-[174.38%] left-[-92.41%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-12.svg"
          />
          <div className="absolute h-[2.39%] w-[8.43%] top-[0%] right-[183.15%] bottom-[97.61%] left-[-91.57%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-200" />
        </div>
        <div className="absolute h-[27.06%] w-[12.98%] top-[56.97%] right-[14.54%] bottom-[15.97%] left-[72.48%] [transform:_rotate(180deg)] [transform-origin:0_0]">
          <div className="absolute h-[5.22%] w-[8.43%] top-[94.78%] right-[91.57%] bottom-[0%] left-[0%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-200" />
          <img
            className="absolute h-[96.27%] w-[85%] top-[1.86%] right-[107.41%] bottom-[1.86%] left-[-92.41%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-13.svg"
          />
          <div className="absolute h-[5.22%] w-[8.43%] top-[0%] right-[183.15%] bottom-[94.78%] left-[-91.57%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-200" />
        </div>
        <div className="absolute h-[2.03%] w-[12.98%] top-[82.02%] right-[14.54%] bottom-[15.95%] left-[72.48%] [transform:_rotate(180deg)] [transform-origin:0_0]">
          <div className="absolute h-[69.42%] w-[8.06%] top-[29.75%] right-[91.94%] bottom-[0.83%] left-[0%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-200" />
          <img
            className="absolute h-[87.6%] w-[85.74%] top-[20.66%] right-[107.04%] bottom-[-8.26%] left-[-92.78%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-14.svg"
          />
          <div className="absolute h-[69.42%] w-[8.06%] top-[0%] right-[183.89%] bottom-[30.58%] left-[-91.94%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-200" />
        </div>
        <div className="absolute h-[34.62%] w-[12.98%] top-[117.31%] right-[14.54%] bottom-[-51.93%] left-[72.48%] [transform:_rotate(180deg)] [transform-origin:0_0]">
          <div className="absolute h-[5.19%] w-[8.43%] top-[-94.81%] right-[91.57%] bottom-[189.61%] left-[0%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-200" />
          <img
            className="absolute h-[47.96%] w-[85%] top-[-97.96%] right-[107.41%] bottom-[150%] left-[-92.41%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-15.svg"
          />
          <div className="absolute h-[5.19%] w-[8.43%] top-[0%] right-[183.15%] bottom-[94.81%] left-[-91.57%] rounded bg-bg-card box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-mediumslateblue-200" />
        </div>
        <img
          className="absolute top-[141px] left-[98px] w-[210px] h-[454px]"
          alt=""
          src="/frame-11.svg"
        />
        <div className="absolute top-[863px] left-[229px] w-20 h-[62px]">
          <div className="absolute h-[12.9%] w-[10%] top-[87.1%] right-[90%] bottom-[0%] left-[0%] rounded bg-bg-card box-border border-[1px] border-solid border-txt-desactive" />
          <img
            className="absolute h-[87.1%] w-[82.5%] top-[6.45%] right-[8.75%] bottom-[6.45%] left-[8.75%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-16.svg"
          />
          <div className="absolute h-[12.9%] w-[10%] top-[0%] right-[0%] bottom-[87.1%] left-[90%] rounded bg-bg-card box-border border-[1px] border-solid border-txt-desactive" />
        </div>
        <div className="absolute top-[47px] left-[364px] w-16 h-16">
          <div className="absolute top-[0px] left-[0px] rounded-13xl bg-txt-active w-16 h-16" />
          <img
            className="absolute top-[22px] left-[7px] w-[50px] h-[21px] object-cover"
            alt=""
            src="/image-822@2x.png"
          />
        </div>
        <img
          className="absolute top-[392px] left-[663px] rounded-31xl w-16 h-16 object-cover"
          alt=""
          src="/image-74@2x.png"
        />
        <div className="absolute top-[226px] left-[371px] w-16 h-16">
          <div className="absolute top-[0px] left-[0px] rounded-13xl bg-txt-active w-16 h-16" />
          <img
            className="absolute top-[8px] left-[8px] rounded-xl w-12 h-12 object-cover"
            alt=""
            src="/image-752@2x.png"
          />
        </div>
        <div className="absolute top-[227px] left-[98px] rounded-13xl bg-txt-active w-16 h-16" />
        <div className="absolute top-[408px] left-[98px] rounded-13xl bg-txt-active w-16 h-16" />
        <img
          className="absolute top-[235px] left-[106px] rounded-xl w-12 h-12 object-cover"
          alt=""
          src="/image-752@2x.png"
        />
        <img
          className="absolute top-[416px] left-[106px] rounded-xl w-12 h-12 object-cover"
          alt=""
          src="/image-81@2x.png"
        />
        <div className="absolute top-[574px] left-[367px] w-16 h-16">
          <div className="absolute top-[0px] left-[0px] rounded-13xl bg-txt-active w-16 h-16" />
          <img
            className="absolute top-[8px] left-[8px] rounded-xl w-12 h-12 object-cover"
            alt=""
            src="/image-761@2x.png"
          />
        </div>
        <div className="absolute top-[793px] left-[101px] w-16 h-16">
          <div className="absolute top-[0px] left-[0px] rounded-13xl bg-txt-active w-16 h-16" />
          <img
            className="absolute top-[8px] left-[8px] rounded-xl w-12 h-12 object-cover"
            alt=""
            src="/image-78@2x.png"
          />
        </div>
        <img
          className="absolute top-[609px] left-[106px] rounded-xl w-12 h-[44.4px] object-cover"
          alt=""
          src="/image-79@2x.png"
        />
        <img
          className="absolute top-[47px] left-[94px] rounded-31xl w-16 h-16 object-cover"
          alt=""
          src="/image-802@2x.png"
        />
        <div className="absolute h-[10.18%] w-[18.62%] top-[117.98%] right-[-15.44%] bottom-[-28.17%] left-[96.83%] rounded-xl bg-deepskyblue-100 [backdrop-filter:blur(20px)] text-primary-color">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div className="absolute h-[33.33%] w-[43.51%] top-[33.33%] left-[38.8%] font-medium inline-block">
            Cliente
          </div>
          <img
            className="absolute h-3/6 w-[14.14%] top-[25.08%] right-[68.24%] bottom-[24.92%] left-[17.62%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bipluslg1.svg"
          />
        </div>
        <div className="absolute h-[10.18%] w-[18.62%] top-[115.46%] right-[76.45%] bottom-[-25.65%] left-[4.93%] rounded-xl bg-deepskyblue-100 [backdrop-filter:blur(20px)] text-primary-color">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div className="absolute h-[33.33%] w-[43.51%] top-[33.33%] left-[38.8%] font-medium inline-block">
            Proveedor
          </div>
          <img
            className="absolute h-3/6 w-[14.14%] top-[25.08%] right-[68.24%] bottom-[24.92%] left-[17.62%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bipluslg1.svg"
          />
        </div>
      </div>
      <b className="absolute top-[64px] left-[400px] text-5xl inline-block text-text-primary w-[538px]">
        Dashboard
      </b>
      <div className="absolute h-[8.42%] w-[13.28%] top-[6.67%] right-[3.13%] bottom-[84.92%] left-[83.59%] rounded-xl bg-mediumslateblue-300 [backdrop-filter:blur(20px)] text-text-primary">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
        <div className="absolute top-[0px] left-[46px] w-[104px] h-[61px]">
          <img
            className="absolute top-[18px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/bxbxexport.svg"
          />
          <div className="absolute h-full w-[71.15%] top-[0%] left-[28.85%] font-medium flex items-center">
            Export
          </div>
        </div>
      </div>
      <img
        className="absolute top-[655px] left-[7px] rounded w-[52px] h-[51px] object-cover"
        alt=""
        src="/ftpbzqrxsagidng-1@2x.png"
      />
      <img
        className="absolute top-[414px] left-[20px] w-[27px] h-[27px] object-cover cursor-pointer"
        alt=""
        src="/image-83@2x.png"
        onClick={onImage83IconClick}
      />
      <img
        className="absolute top-[474px] left-[19px] w-[30px] h-[29px] object-cover cursor-pointer"
        alt=""
        src="/image-841@2x.png"
        onClick={onImage84IconClick}
      />
    </div>
  );
};

export default Dashboard;
