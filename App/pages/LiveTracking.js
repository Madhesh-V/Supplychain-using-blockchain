import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LiveTracking = () => {
  const navigate = useNavigate();

  const onFachainIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCadenaDeSuministrosClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUnidadDeNegocioClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onProveedoresTextClick = useCallback(() => {
    navigate("/suppers");
  }, [navigate]);

  const onClientesTextClick = useCallback(() => {
    navigate("/clients");
  }, [navigate]);

  const onAkarIconspersonClick = useCallback(() => {
    navigate("/clients");
  }, [navigate]);

  const onHistorialDeOperacionesClick = useCallback(() => {
    navigate("/trading-history");
  }, [navigate]);

  const onProcessosTextClick = useCallback(() => {
    navigate("/nft-collection");
  }, [navigate]);

  const onDistribuidoresTextClick = useCallback(() => {
    navigate("/dealers");
  }, [navigate]);

  const onImage84IconClick = useCallback(() => {
    navigate("/nft-collection");
  }, [navigate]);

  return (
    <div className="relative rounded-xl bg-gray-600 w-full h-[720px] overflow-hidden text-left text-sm text-txt-desactive font-subtitulos">
      <div className="absolute top-[0px] left-[0px] w-[300px] h-[720px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-1100 [backdrop-filter:blur(20px)]" />
        <img
          className="absolute h-[3.33%] w-[8%] top-[5%] right-[81%] bottom-[91.67%] left-[11%] max-w-full overflow-hidden max-h-full cursor-pointer"
          alt=""
          src="/fachain.svg"
          onClick={onFachainIconClick}
        />
        <b
          className="absolute h-[3.33%] w-[66.67%] top-[5%] left-[24.33%] text-lg inline-block text-txt-active cursor-pointer"
          onClick={onCadenaDeSuministrosClick}
        >
          Assurance Gateway
        </b>
        <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] h-20 text-text-primary">
          <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] rounded-4xs bg-darkslategray-100 [backdrop-filter:blur(4px)] h-20" />
          <img
            className="absolute w-[16%] right-[75.67%] bottom-[-624px] left-[8.33%] rounded-31xl max-w-full overflow-hidden h-12 object-cover hidden"
            alt=""
            src="/rectangle-6@2x.png"
          />
          <div className="absolute w-[44.67%] bottom-[46px] left-[28.33%] inline-block h-3.5">
            <p className="m-0">Gwen Stacy</p>
          </div>
          <b className="absolute w-[44.67%] bottom-[25px] left-[28.33%] text-xs inline-block font-comfortaa text-txt-desactive h-[11px]">
            EMTRAFESA
          </b>
          <div className="absolute w-[1.33%] right-[12.67%] bottom-[38px] left-[86%] rounded-31xl bg-silver-100 h-1 [transform:_rotate(0.17deg)] [transform-origin:0_0]" />
          <div className="absolute w-[1.33%] right-[10.33%] bottom-[38px] left-[88.33%] rounded-31xl bg-silver-100 h-1 [transform:_rotate(0.17deg)] [transform-origin:0_0]" />
          <div className="absolute w-[1.33%] right-[8%] bottom-[38px] left-[90.67%] rounded-31xl bg-silver-100 h-1 [transform:_rotate(0.17deg)] [transform-origin:0_0]" />
        </div>
        <div className="absolute h-[6.67%] w-[84%] top-[17.08%] right-[8%] bottom-[76.25%] left-[8%] rounded-xl [backdrop-filter:blur(20px)]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div
            className="absolute h-[33.33%] w-[61.9%] top-[33.33%] left-[28.57%] font-medium inline-block cursor-pointer"
            onClick={onUnidadDeNegocioClick}
          >
            Business Unit
          </div>
          <img
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[80.95%] bottom-[25%] left-[9.52%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/ggworkalt1.svg"
          />
        </div>
        <div className="absolute h-[6.67%] w-[84%] top-[77.92%] right-[8%] bottom-[15.42%] left-[8%] rounded-xl">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkslategray-500" />
          <div className="absolute h-[33.33%] w-[72.46%] top-[33.33%] left-[11.59%] font-medium inline-block">
            Company
          </div>
        </div>
        <div className="absolute top-[73.89%] left-[14.67%] font-medium">
          Account
        </div>
        <div className="absolute top-[13.06%] left-[14.67%] font-medium">
          Summary
        </div>
        <div className="absolute h-[6.67%] w-[84%] top-[78.89%] right-[8%] bottom-[14.44%] left-[8%] rounded-xl">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div className="absolute h-[33.33%] w-[72.46%] top-[33.33%] left-[11.59%] font-medium hidden">
            Cuenta
          </div>
        </div>
        <div className="absolute h-[6.67%] w-[84%] top-[24.86%] right-[8%] bottom-[68.47%] left-[8%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div
            className="absolute h-[33.33%] w-[65.08%] top-[33.33%] left-[28.57%] font-medium inline-block cursor-pointer"
            onClick={onProveedoresTextClick}
          >
            Suppliers
          </div>
          <img
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[80.95%] bottom-[25%] left-[9.52%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/carbonenterprise.svg"
          />
        </div>
        <div className="absolute h-[6.67%] w-[84%] top-[40.42%] right-[8%] bottom-[52.92%] left-[8%] rounded-xl bg-mediumslateblue-400">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div
            className="absolute h-[33.33%] w-[54.37%] top-[33.33%] left-[29.76%] font-medium inline-block cursor-pointer"
            onClick={onClientesTextClick}
          >
            Clients
          </div>
          <img
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[81.75%] bottom-[25%] left-[8.73%] max-w-full overflow-hidden max-h-full cursor-pointer"
            alt=""
            src="/akariconsperson.svg"
            onClick={onAkarIconspersonClick}
          />
        </div>
        <div className="absolute h-[6.67%] w-[84%] top-[48.19%] right-[8%] bottom-[45.14%] left-[8%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div
            className="absolute h-[33.33%] w-[66.27%] top-[33.33%] left-[29.76%] font-medium inline-block cursor-pointer"
            onClick={onHistorialDeOperacionesClick}
          >
            Trading history
          </div>
          <img
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[81.75%] bottom-[25%] left-[8.73%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/fluenthistory24filled.svg"
          />
        </div>
        <div className="absolute h-[6.67%] w-[84%] top-[55.97%] right-[8%] bottom-[37.36%] left-[8%] rounded-xl bg-mediumslateblue-500 text-text-primary">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div className="absolute h-[33.33%] w-[66.27%] top-[33.33%] left-[29.76%] font-medium inline-block">
            Live Tracking
          </div>
          <img
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[81.75%] bottom-[25%] left-[8.73%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/healthiconscityworkeroutline2.svg"
          />
        </div>
        <div className="absolute h-[6.67%] w-[84%] top-[63.75%] right-[8%] bottom-[29.58%] left-[8%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div
            className="absolute h-[33.33%] w-[66.27%] top-[33.33%] left-[29.76%] font-medium inline-block cursor-pointer"
            onClick={onProcessosTextClick}
          >
            NFT Collection
          </div>
          <img
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[81.75%] bottom-[25%] left-[8.73%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/healthiconscityworkeroutline1.svg"
          />
        </div>
        <div className="absolute h-[6.67%] w-[84%] top-[32.64%] right-[8%] bottom-[60.69%] left-[8%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div
            className="absolute h-[33.33%] w-[52.78%] top-[33.33%] left-[28.57%] font-medium inline-block cursor-pointer"
            onClick={onDistribuidoresTextClick}
          >
            Dealers
          </div>
          <img
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[80.95%] bottom-[25%] left-[9.52%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bitruck.svg"
          />
        </div>
      </div>
      <div className="absolute top-[1692px] left-[866px] rounded-xl bg-darkgray w-[276px]" />
      <img
        className="absolute top-[654px] left-[17px] rounded w-[52px] h-[51px] object-cover"
        alt=""
        src="/ftpbzqrxsagidng-1@2x.png"
      />
      <div className="absolute top-[732px] left-[410px] text-base">
        (405) 555-0128
      </div>
      <div className="absolute top-[732px] left-[662px] text-base">
        (405) 555-0128
      </div>
      <div className="absolute top-[728px] left-[943px] text-base">
        (405) 555-0128
      </div>
      <img
        className="absolute top-[415px] left-[44px] w-[27px] h-[27px] object-cover"
        alt=""
        src="/image-83@2x.png"
      />
      <img
        className="absolute top-[468px] left-[46px] w-[30px] h-[29px] object-cover cursor-pointer"
        alt=""
        src="/image-841@2x.png"
        onClick={onImage84IconClick}
      />
      <img
        className="absolute top-[0px] left-[300px] w-[980px] h-[840px] object-cover"
        alt=""
        src="/2147483648-211013-1@2x.png"
      />
      <div className="absolute top-[627px] left-[741px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[0px] left-[925px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[14px] left-[935px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[27px] left-[925px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[28px] left-[954px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[9px] left-[965px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[-8px] left-[945px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[6px] left-[911px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[30px] left-[898px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[654px] left-[696px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[697px] left-[647px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[583.6px] left-[526px] rounded-[671.27px] bg-text-primary w-[31px] overflow-hidden" />
      <img
        className="absolute top-[587.6px] left-[531px] rounded-xl w-[22px] h-[23px] object-cover"
        alt=""
        src="/image-76@2x.png"
      />
      <img
        className="absolute top-[631px] left-[542px] rounded-xl w-[22px] h-[23px] object-cover"
        alt=""
        src="/image-90@2x.png"
      />
      <img
        className="absolute top-[668px] left-[579px] rounded-xl w-[22px] h-[23px] object-cover"
        alt=""
        src="/image-90@2x.png"
      />
      <img
        className="absolute top-[697px] left-[614px] rounded-xl w-[22px] h-[23px] object-cover"
        alt=""
        src="/image-90@2x.png"
      />
      <img
        className="absolute top-[554px] left-[489px] rounded-xl w-[22px] h-[23px] object-cover"
        alt=""
        src="/image-90@2x.png"
      />
      <img
        className="absolute top-[484px] left-[482px] rounded-xl w-[22px] h-[23px] object-cover"
        alt=""
        src="/image-90@2x.png"
      />
      <img
        className="absolute top-[423px] left-[445px] rounded-xl w-[22px] h-[23px] object-cover"
        alt=""
        src="/image-90@2x.png"
      />
      <img
        className="absolute top-[359px] left-[409px] rounded-xl w-[22px] h-[23px] object-cover"
        alt=""
        src="/image-90@2x.png"
      />
      <img
        className="absolute top-[307px] left-[369px] rounded-xl w-[22px] h-[23px] object-cover"
        alt=""
        src="/image-90@2x.png"
      />
      <img
        className="absolute top-[86px] left-[444px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[176px] left-[431px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[182px] left-[532px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[227px] left-[476px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[271px] left-[479px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[225px] left-[353px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[150px] left-[321px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[57px] left-[337px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[22px] left-[427px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[11px] left-[321px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[35px] left-[628px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[2px] left-[563px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[81px] left-[521px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[55px] left-[585px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[72px] left-[570px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[56px] left-[547px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[48px] left-[576px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[81px] left-[608px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <img
        className="absolute top-[93px] left-[582px] rounded-31xl w-8 h-[30px] object-cover"
        alt=""
        src="/image-75@2x.png"
      />
      <div className="absolute top-[171px] left-[925px] rounded-[671.27px] bg-text-primary w-12 overflow-hidden" />
      <div className="absolute top-[654px] left-[1018px] rounded-[671.27px] bg-text-primary w-12 overflow-hidden" />
      <div className="absolute top-[179px] left-[898px] rounded-[671.27px] bg-text-primary w-12 overflow-hidden" />
      <div className="absolute top-[662px] left-[991px] rounded-[671.27px] bg-text-primary w-12 overflow-hidden" />
      <div className="absolute top-[198px] left-[917px] rounded-[671.27px] bg-text-primary w-12 overflow-hidden" />
      <div className="absolute top-[195px] left-[956px] rounded-[671.27px] bg-text-primary w-12 overflow-hidden" />
      <div className="absolute top-[177px] left-[963px] rounded-[671.27px] bg-text-primary w-12 overflow-hidden" />
      <div className="absolute top-[660px] left-[1056px] rounded-[671.27px] bg-text-primary w-12 overflow-hidden" />
      <div className="absolute top-[155px] left-[960px] rounded-[671.27px] bg-text-primary w-12 overflow-hidden" />
      <div className="absolute top-[638px] left-[1053px] rounded-[671.27px] bg-text-primary w-12 overflow-hidden" />
      <div className="absolute top-[144px] left-[917px] rounded-[671.27px] bg-text-primary w-12 overflow-hidden" />
      <div className="absolute top-[627px] left-[1010px] rounded-[671.27px] bg-text-primary w-12 overflow-hidden" />
      <div className="absolute top-[159px] left-[874px] rounded-[671.27px] bg-text-primary w-12 overflow-hidden" />
      <img
        className="absolute top-[177px] left-[934px] w-[30px] h-[13px] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <img
        className="absolute top-[660px] left-[1027px] w-[30px] h-[13px] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <img
        className="absolute top-[185px] left-[907px] w-[30px] h-[13px] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <img
        className="absolute top-[668px] left-[1000px] w-[30px] h-[13px] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <img
        className="absolute top-[204px] left-[925px] w-[30px] h-[13px] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <img
        className="absolute top-[687px] left-[1018px] w-[30px] h-[13px] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <img
        className="absolute top-[201px] left-[965px] w-[30px] h-[13px] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <img
        className="absolute top-[684px] left-[1058px] w-[30px] h-[13px] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <img
        className="absolute top-[183px] left-[972px] w-[30px] h-[13px] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <img
        className="absolute top-[666px] left-[1065px] w-[30px] h-[13px] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <img
        className="absolute top-[161px] left-[969px] w-[30px] h-[13px] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <img
        className="absolute top-[644px] left-[1062px] w-[30px] h-[13px] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <img
        className="absolute top-[150px] left-[926px] w-[30px] h-[13px] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <img
        className="absolute top-[633px] left-[1019px] w-[30px] h-[13px] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <img
        className="absolute top-[165px] left-[883px] w-[30px] h-[13px] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <img
        className="absolute top-[648px] left-[976px] w-[30px] h-[13px] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <div className="absolute top-[483px] left-[685px] rounded-[671.27px] bg-text-primary w-[37px] overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px] box-border">
        <img
          className="relative w-[19px] h-4 object-cover"
          alt=""
          src="/image-73@2x.png"
        />
      </div>
      <div className="absolute top-[255px] left-[937px] rounded-[14px] bg-darkslategray-400 w-[292px] h-[188px]" />
      <div className="absolute top-[369px] left-[946px] w-[110px] h-5 flex flex-col items-start justify-start gap-[12px] text-text-primary">
        <b className="relative leading-[140%]">Contract Address</b>
        <div className="flex flex-row items-center justify-start gap-[8px] text-white">
          <div className="relative leading-[160%]">0xEEdb...30e0Cb</div>
          <img className="relative w-7 h-7" alt="" src="/iconcopy.svg" />
        </div>
      </div>
      <div className="absolute top-[369px] left-[1075px] w-[100px] h-5 flex flex-col items-start justify-start gap-[12px] text-text-primary">
        <b className="relative leading-[140%]">Created By</b>
        <div className="flex flex-row items-center justify-start gap-[8px] text-white">
          <div className="relative leading-[160%]">0x7ab3...cd830</div>
          <img className="relative w-7 h-7" alt="" src="/iconcopy.svg" />
        </div>
      </div>
      <img
        className="absolute top-[510px] left-[643px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[554px] left-[688px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[595px] left-[628px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[627px] left-[698px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[510px] left-[779px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[423px] left-[798px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[393px] left-[666px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[360px] left-[557px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[307px] left-[576px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[268px] left-[630px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[217px] left-[669px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[330px] left-[760px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[310px] left-[898px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[222px] left-[772px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[123px] left-[779px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[93px] left-[647px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[41px] left-[798px] w-[19px] h-4 object-cover"
        alt=""
        src="/image-731@2x.png"
      />
      <img
        className="absolute top-[268px] left-[980px] rounded-[44px] w-[195px] h-[88px] object-cover"
        alt=""
        src="/image-801@2x.png"
      />
    </div>
  );
};

export default LiveTracking;
