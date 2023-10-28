import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NFTCollection = () => {
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

  const onGgworkAltIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onProveedoresTextClick = useCallback(() => {
    navigate("/suppers");
  }, [navigate]);

  const onCarbonenterpriseIconClick = useCallback(() => {
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

  const onFluenthistory24FilledIconClick = useCallback(() => {
    navigate("/trading-history");
  }, [navigate]);

  const onEmpleadosTextClick = useCallback(() => {
    navigate("/live-tracking");
  }, [navigate]);

  const onHealthiconscityWorkerOutlinClick = useCallback(() => {
    navigate("/live-tracking");
  }, [navigate]);

  const onDistribuidoresTextClick = useCallback(() => {
    navigate("/dealers");
  }, [navigate]);

  const onImage83IconClick = useCallback(() => {
    navigate("/live-tracking");
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
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[80.95%] bottom-[25%] left-[9.52%] max-w-full overflow-hidden max-h-full cursor-pointer"
            alt=""
            src="/ggworkalt1.svg"
            onClick={onGgworkAltIconClick}
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
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[80.95%] bottom-[25%] left-[9.52%] max-w-full overflow-hidden max-h-full cursor-pointer"
            alt=""
            src="/carbonenterprise.svg"
            onClick={onCarbonenterpriseIconClick}
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
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[81.75%] bottom-[25%] left-[8.73%] max-w-full overflow-hidden max-h-full cursor-pointer"
            alt=""
            src="/fluenthistory24filled.svg"
            onClick={onFluenthistory24FilledIconClick}
          />
        </div>
        <div className="absolute h-[6.67%] w-[84%] top-[55.97%] right-[8%] bottom-[37.36%] left-[8%] rounded-xl bg-gray-300">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div
            className="absolute h-[33.33%] w-[66.27%] top-[33.33%] left-[29.76%] font-medium inline-block cursor-pointer"
            onClick={onEmpleadosTextClick}
          >
            Live Tracking
          </div>
          <img
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[81.75%] bottom-[25%] left-[8.73%] max-w-full overflow-hidden max-h-full cursor-pointer"
            alt=""
            src="/healthiconscityworkeroutline2.svg"
            onClick={onHealthiconscityWorkerOutlinClick}
          />
        </div>
        <div className="absolute h-[6.67%] w-[84%] top-[63.75%] right-[8%] bottom-[29.58%] left-[8%] rounded-xl bg-mediumslateblue-200 text-text-primary">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div className="absolute h-[33.33%] w-[66.27%] top-[33.33%] left-[29.76%] font-medium inline-block">
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
      <img
        className="absolute top-[654px] left-[17px] rounded w-[52px] h-[51px] object-cover"
        alt=""
        src="/ftpbzqrxsagidng-1@2x.png"
      />
      <img
        className="absolute top-[415px] left-[44px] w-[27px] h-[27px] object-cover cursor-pointer"
        alt=""
        src="/image-83@2x.png"
        onClick={onImage83IconClick}
      />
      <img
        className="absolute top-[470px] left-[43px] w-[30px] h-[29px] object-cover"
        alt=""
        src="/image-84@2x.png"
      />
      <div className="absolute top-[36px] left-[330px] rounded-6xl bg-gray-1000 [backdrop-filter:blur(4px)] w-[904px] h-[646px] overflow-auto mix-blend-exclusion text-center text-white">
        <img
          className="absolute top-[418px] left-[14px] rounded-2xl w-[166px] h-[185px] object-cover"
          alt=""
          src="/image-144@2x.png"
        />
        <img
          className="absolute top-[613px] left-[14px] rounded-2xl w-[166px] h-[142px] object-cover"
          alt=""
          src="/image-150@2x.png"
        />
        <img
          className="absolute top-[615px] left-[191px] rounded-2xl w-[166px] h-[142px] object-cover"
          alt=""
          src="/image-150@2x.png"
        />
        <img
          className="absolute top-[221px] left-[13px] rounded-2xl w-[166px] h-[185px] object-cover"
          alt=""
          src="/image-144@2x.png"
        />
        <img
          className="absolute top-[218px] left-[191px] rounded-2xl w-[166px] h-[185px] object-cover"
          alt=""
          src="/image-144@2x.png"
        />
        <img
          className="absolute top-[21px] left-[190px] rounded-2xl w-[166px] h-[185px] object-cover"
          alt=""
          src="/image-144@2x.png"
        />
        <img
          className="absolute top-[24px] left-[14px] rounded-2xl w-[166px] h-[185px] object-cover"
          alt=""
          src="/image-144@2x.png"
        />
        <div className="absolute top-[33px] left-[22px] rounded-[50%] bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-6 h-6 border-[1px] border-solid border-gray-1200" />
        <img
          className="absolute top-[37px] left-[26px] w-4 h-4"
          alt=""
          src="/tokeneth.svg"
        />
        <img
          className="absolute top-[418px] left-[191px] rounded-2xl w-[166px] h-[185px] object-cover"
          alt=""
          src="/image-144@2x.png"
        />
        <div className="absolute top-[15px] left-[377px] rounded-6xl bg-gray-500 [backdrop-filter:blur(4px)] w-[504px] h-[620px] overflow-auto mix-blend-lighten" />
        <div className="absolute top-[0px] left-[470px] w-[343px] h-[343px] text-base">
          <img
            className="absolute top-[31px] left-[0px] rounded-2xl w-[343px] h-[343px] object-cover"
            alt=""
            src="/image-148@2x.png"
          />
          <div className="absolute bottom-[8px] left-[28px] rounded-81xl bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-[287px] h-11 overflow-hidden border-[1px] border-solid border-gray-1200">
            <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_62.5px)] leading-[140%] font-medium">
              #10 EVOL Fanny
            </div>
          </div>
        </div>
        <div className="absolute top-[468px] left-[469px] w-[354px] h-[69px] flex flex-col items-start justify-start gap-[12px] text-left text-text-primary">
          <b className="relative leading-[140%] flex items-center w-[45px]">
            About
          </b>
          <div className="relative leading-[160%] text-white flex items-center w-[327px]">
            A collection of EVOL in his various forms and guises, all pieces are
            individual and unique.
          </div>
        </div>
        <div className="absolute top-[562px] left-[469px] w-40 h-[55px] flex flex-col items-start justify-start gap-[12px] text-left text-text-primary">
          <b className="relative leading-[140%]">Contract Address</b>
          <div className="flex flex-row items-center justify-start gap-[8px] text-white">
            <div className="relative leading-[160%]">0xEEdb...30e0Cb</div>
            <img className="relative w-7 h-7" alt="" src="/iconcopy.svg" />
          </div>
        </div>
        <div className="absolute top-[562px] left-[657px] w-[146px] h-[55px] flex flex-col items-start justify-start gap-[12px] text-left text-text-primary">
          <b className="relative leading-[140%]">Created By</b>
          <div className="flex flex-row items-center justify-start gap-[8px] text-white">
            <div className="relative leading-[160%]">0x7ab3...cd830</div>
            <img className="relative w-7 h-7" alt="" src="/iconcopy.svg" />
          </div>
        </div>
        <div className="absolute top-[392px] left-[478px] rounded-2xl bg-gray-200 w-[327px] h-[68px] flex flex-row items-center justify-start py-5 pr-5 pl-[83px] box-border gap-[29px] text-left text-xl">
          <img className="relative w-10 h-10" alt="" src="/tokeneth2.svg" />
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <div className="relative leading-[140%] font-medium">1.53 ETH</div>
            <b className="relative text-sm leading-[140%] text-gray-1">
              $1164.35
            </b>
          </div>
        </div>
        <div className="absolute top-[418px] left-[14px] w-[166px] h-[185px]">
          <div className="absolute top-[140px] left-[8px] rounded-81xl bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-[150px] h-[37px] overflow-hidden border-[1px] border-solid border-gray-1200">
            <b className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_65px)] leading-[140%]">
              #08 EVOL Bombed
            </b>
          </div>
          <div className="absolute top-[8px] left-[8px] rounded-[50%] bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-6 h-6 border-[1px] border-solid border-gray-1200" />
          <img
            className="absolute top-[12px] left-[12px] w-4 h-4"
            alt=""
            src="/tokeneth.svg"
          />
        </div>
        <div className="absolute top-[615px] left-[14px] w-[166px] h-[185px]">
          <div className="absolute top-[140px] left-[8px] rounded-81xl bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-[150px] h-[37px] overflow-hidden border-[1px] border-solid border-gray-1200">
            <b className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_56px)] leading-[140%]">
              #10 EVOL Fanny
            </b>
          </div>
          <div className="absolute top-[8px] left-[8px] rounded-[50%] bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-6 h-6 border-[1px] border-solid border-gray-1200" />
          <img
            className="absolute top-[12px] left-[12px] w-4 h-4"
            alt=""
            src="/tokeneth.svg"
          />
        </div>
        <div className="absolute top-[418px] left-[191px] w-[166px] h-[185px]">
          <div className="absolute top-[140px] left-[8px] rounded-81xl bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-[150px] h-[37px] overflow-hidden border-[1px] border-solid border-gray-1200">
            <b className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_59px)] leading-[140%]">
              #84 EVOL Brown
            </b>
          </div>
          <div className="absolute top-[8px] left-[8px] rounded-[50%] bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-6 h-6 border-[1px] border-solid border-gray-1200" />
          <img
            className="absolute top-[12px] left-[12px] w-4 h-4"
            alt=""
            src="/tokeneth.svg"
          />
        </div>
        <div className="absolute top-[615px] left-[191px] w-[166px] h-[185px]">
          <div className="absolute top-[140px] left-[8px] rounded-81xl bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-[150px] h-[37px] overflow-hidden border-[1px] border-solid border-gray-1200">
            <b className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_56px)] leading-[140%]">
              #10 EVOL Fanny
            </b>
          </div>
          <div className="absolute top-[8px] left-[8px] rounded-[50%] bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-6 h-6 border-[1px] border-solid border-gray-1200" />
          <img
            className="absolute top-[12px] left-[12px] w-4 h-4"
            alt=""
            src="/tokeneth.svg"
          />
        </div>
        <div className="absolute top-[221px] left-[14px] w-[166px] h-[185px]">
          <div className="absolute top-[140px] left-[8px] rounded-81xl bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-[150px] h-[37px] overflow-hidden border-[1px] border-solid border-gray-1200">
            <b className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54px)] leading-[140%]">
              #49 EVOL Benji
            </b>
          </div>
          <div className="absolute top-[8px] left-[8px] rounded-[50%] bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-6 h-6 border-[1px] border-solid border-gray-1200" />
          <img
            className="absolute top-[12px] left-[12px] w-4 h-4"
            alt=""
            src="/tokeneth.svg"
          />
        </div>
        <div className="absolute top-[24px] left-[191px] w-[166px] h-[185px]">
          <div className="absolute top-[140px] left-[8px] rounded-81xl bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-[150px] h-[37px] overflow-hidden border-[1px] border-solid border-gray-1200">
            <b className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_58px)] leading-[140%]">
              #102 EVOL Chux
            </b>
          </div>
          <div className="absolute top-[8px] left-[8px] rounded-[50%] bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-6 h-6 border-[1px] border-solid border-gray-1200" />
          <img
            className="absolute top-[12px] left-[12px] w-4 h-4"
            alt=""
            src="/tokeneth.svg"
          />
        </div>
        <div className="absolute top-[164px] left-[21px] rounded-81xl bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-[150px] h-[37px] overflow-hidden border-[1px] border-solid border-gray-1200">
          <b className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_58px)] leading-[140%]">
            #102 EVOL Chux
          </b>
        </div>
        <div className="absolute top-[221px] left-[191px] w-[166px] h-[185px]">
          <div className="absolute top-[140px] left-[8px] rounded-81xl bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-[150px] h-[37px] overflow-hidden border-[1px] border-solid border-gray-1200">
            <b className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_45px)] leading-[140%]">
              #63 EVOL Ye
            </b>
          </div>
          <div className="absolute top-[8px] left-[8px] rounded-[50%] bg-gray-1300 shadow-[0px_10px_15px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(20px)] box-border w-6 h-6 border-[1px] border-solid border-gray-1200" />
          <img
            className="absolute top-[12px] left-[12px] w-4 h-4"
            alt=""
            src="/tokeneth.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default NFTCollection;
