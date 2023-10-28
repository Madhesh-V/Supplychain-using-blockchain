import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Dealers = () => {
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

  const onHistorialDeOperacionesClick = useCallback(() => {
    navigate("/trading-history");
  }, [navigate]);

  const onEmpleadosTextClick = useCallback(() => {
    navigate("/live-tracking");
  }, [navigate]);

  const onProcessosTextClick = useCallback(() => {
    navigate("/nft-collection");
  }, [navigate]);

  const onClientsTextClick = useCallback(() => {
    navigate("/clients");
  }, [navigate]);

  const onImage83IconClick = useCallback(() => {
    navigate("/live-tracking");
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
        <div className="absolute h-[6.67%] w-[84%] top-[24.86%] right-[8%] bottom-[68.47%] left-[8%] text-text-primary">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-mediumslateblue-500 hidden" />
          <div
            className="absolute h-[33.33%] w-[65.08%] top-[33.33%] left-[28.57%] font-medium inline-block cursor-pointer"
            onClick={onProveedoresTextClick}
          >
            Suppliers
          </div>
          <img
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[80.95%] bottom-[25%] left-[9.52%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/carbonenterprise1.svg"
          />
        </div>
        <div className="absolute h-[6.67%] w-[84%] top-[40.42%] right-[8%] bottom-[52.92%] left-[8%] rounded-xl bg-darkslateblue hidden text-txt-active">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-darkslategray-300 hidden" />
          <div className="absolute h-[33.33%] w-[54.37%] top-[33.33%] left-[29.76%] font-medium inline-block">
            Clients
          </div>
          <img
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[81.75%] bottom-[25%] left-[8.73%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/akariconsperson1.svg"
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
        <div className="absolute h-[6.67%] w-[84%] top-[55.97%] right-[8%] bottom-[37.36%] left-[8%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div
            className="absolute h-[33.33%] w-[66.27%] top-[33.33%] left-[29.76%] font-medium inline-block cursor-pointer"
            onClick={onEmpleadosTextClick}
          >
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
            <p className="m-0">NFT Collection</p>
          </div>
          <img
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[81.75%] bottom-[25%] left-[8.73%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/healthiconscityworkeroutline1.svg"
          />
        </div>
        <div className="absolute h-[6.67%] w-[84%] top-[32.64%] right-[8%] bottom-[60.69%] left-[8%] bg-midnightblue-200 text-text-primary">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-4xs bg-mediumslateblue-500" />
          <div className="absolute h-[33.33%] w-[52.78%] top-[33.33%] left-[28.57%] font-medium inline-block">
            Dealers
          </div>
          <img
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[80.95%] bottom-[25%] left-[9.52%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bitruck1.svg"
          />
        </div>
      </div>
      <div className="absolute top-[302px] left-[45px] w-[190px] h-6">
        <div
          className="absolute h-[66.67%] w-[72.11%] top-[16.67%] left-[27.89%] font-medium inline-block cursor-pointer"
          onClick={onClientsTextClick}
        >
          Clients
        </div>
        <img
          className="absolute h-full w-[12.63%] top-[0%] right-[87.37%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/akariconsperson.svg"
        />
      </div>
      <div className="absolute top-[0px] left-[300px] w-[300px] h-[720px] overflow-y-auto text-9xl text-txt-active">
        <div className="absolute top-[0px] left-[0px] bg-gray-800 [backdrop-filter:blur(30px)] w-[300px] h-[720px]" />
        <b className="absolute top-[36px] left-[24px] inline-block w-[252px]">
          Clients
        </b>
        <div className="absolute top-[106px] left-[24px] w-[252px] h-12 text-sm text-txt-desactive">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-bg-card" />
          <img
            className="absolute h-[43.13%] w-[8.21%] top-[27.08%] right-[85.04%] bottom-[29.79%] left-[6.75%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group.svg"
          />
          <div className="absolute w-[48.41%] top-[31.25%] left-[20.63%] font-medium inline-block">
            Search
          </div>
        </div>
        <div className="absolute top-[291px] left-[12px] rounded-xl w-[276px]" />
        <div className="absolute top-[343px] left-[12px] rounded-xl w-[276px]" />
        <div className="absolute top-[395px] left-[12px] rounded-xl w-[276px]" />
      </div>
      <div className="absolute top-[157px] left-[634px] rounded-xl bg-gray-800 [backdrop-filter:blur(30px)] w-[617px] h-[534px]" />
      <div className="absolute h-[6.67%] w-[19.69%] top-[90%] right-[55%] bottom-[3.33%] left-[25.31%] rounded-xl bg-mediumslateblue-500 [backdrop-filter:blur(20px)] text-txt-active">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
        <div className="absolute h-[33.33%] w-[61.9%] top-[33.33%] left-[28.57%] font-medium inline-block">
          Business Unit
        </div>
        <img
          className="absolute h-3/6 w-[9.52%] top-[25%] right-[80.95%] bottom-[25%] left-[9.52%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/bipluslg.svg"
        />
      </div>
      <div className="absolute top-[1692px] left-[866px] rounded-xl bg-darkgray w-[276px]" />
      <img
        className="absolute top-[654px] left-[17px] rounded w-[52px] h-[51px] object-cover"
        alt=""
        src="/ftpbzqrxsagidng-1@2x.png"
      />
      <div className="absolute top-[179px] left-[324px] rounded-xl bg-bg-3 w-[252px] h-[68px]" />
      <div className="absolute top-[187px] left-[401px] font-medium text-txt-active">
        Repsol Comercial Sac
      </div>
      <div className="absolute top-[263px] left-[401px] font-medium text-txt-active">
        Scania Services del Per
      </div>
      <div className="absolute top-[339px] left-[401px] font-medium text-txt-active">
        Importaciones Nakamin
      </div>
      <div className="absolute top-[415px] left-[401px] font-medium text-txt-active">
        Implementos Peru S.A.C.
      </div>
      <div className="absolute top-[491px] left-[401px] font-medium text-txt-active">{`Marco Peruana S A `}</div>
      <div className="absolute top-[567px] left-[401px] font-medium text-txt-active">
        Madic Iberia
      </div>
      <div className="absolute top-[213px] left-[401px] text-base">
        (405) 555-0128
      </div>
      <div className="absolute top-[289px] left-[401px] text-base">
        (684) 555-0102
      </div>
      <div className="absolute top-[365px] left-[401px] text-base">
        (302) 555-0107
      </div>
      <div className="absolute top-[441px] left-[401px] text-base">
        (405) 555-0128
      </div>
      <div className="absolute top-[517px] left-[401px] text-base">
        (405) 555-0128
      </div>
      <div className="absolute top-[593px] left-[401px] text-base">
        (239) 555-0108
      </div>
      <img
        className="absolute top-[187px] left-[335px] rounded-31xl w-[52px] h-[52px] object-cover"
        alt=""
        src="/rectangle-74@2x.png"
      />
      <div className="absolute top-[180px] left-[329px] w-[52px] h-[52px]">
        <div className="absolute top-[6px] left-[6px] rounded-13xl bg-txt-active w-[52px] h-[52px]" />
        <img
          className="absolute top-[12px] left-[8px] w-12 h-[39.7px] object-cover"
          alt=""
          src="/image-732@2x.png"
        />
      </div>
      <img
        className="absolute top-[263px] left-[335px] rounded-31xl w-[52px] h-[52px] object-cover"
        alt=""
        src="/rectangle-75@2x.png"
      />
      <div className="absolute top-[339px] left-[335px] rounded-31xl bg-bg-dark-2 w-[52px] h-[52px]" />
      <img
        className="absolute top-[415px] left-[335px] rounded-31xl w-[52px] h-[52px] object-cover"
        alt=""
        src="/rectangle-77@2x.png"
      />
      <div className="absolute top-[491px] left-[335px] rounded-31xl bg-bg-dark-2 w-[52px] h-[52px]" />
      <img
        className="absolute top-[567px] left-[335px] rounded-31xl w-[52px] h-[52px] object-cover"
        alt=""
        src="/rectangle-79@2x.png"
      />
      <div className="absolute top-[263px] left-[335px] w-[52px] h-[52px]">
        <div className="absolute top-[0px] left-[0px] rounded-13xl bg-txt-active w-[52px] h-[52px]" />
        <img
          className="absolute top-[0px] left-[0px] rounded-31xl w-[52px] h-[52px] object-cover"
          alt=""
          src="/image-751@2x.png"
        />
      </div>
      <img
        className="absolute top-[415px] left-[335px] w-[52px] h-[52px] object-cover"
        alt=""
        src="/frame-14@2x.png"
      />
      <img
        className="absolute top-[567px] left-[335px] rounded-31xl w-[52px] h-[52px] object-cover"
        alt=""
        src="/image-821@2x.png"
      />
      <div className="absolute top-[59.9px] left-[639px] w-[52px] h-[52px]">
        <div className="absolute top-[6px] left-[6px] rounded-13xl bg-txt-active w-[52px] h-[52px]" />
        <img
          className="absolute top-[12px] left-[8px] w-12 h-[39.7px] object-cover"
          alt=""
          src="/image-733@2x.png"
        />
      </div>
      <b className="absolute top-[62.9px] left-[728px] text-5xl inline-block text-txt-active w-[301.3px]">
        REPSOL COMERCIAL SAC
      </b>
      <div className="absolute top-[96.9px] left-[728px] text-xl inline-block w-[249px]">
        20503840121
      </div>
      <img
        className="absolute top-[53.9px] left-[1194px] w-12 h-12"
        alt=""
        src="/component-20.svg"
      />
      <div className="absolute top-[50px] left-[635px] bg-silver-200 box-border w-[616.6px] h-[86.3px] border-[1px] border-solid border-midnightblue-100" />
      <img
        className="absolute top-[415px] left-[45px] w-[27px] h-[27px] object-cover cursor-pointer"
        alt=""
        src="/image-83@2x.png"
        onClick={onImage83IconClick}
      />
      <img
        className="absolute top-[468px] left-[43px] w-[30px] h-[29px] object-cover cursor-pointer"
        alt=""
        src="/image-841@2x.png"
        onClick={onImage84IconClick}
      />
      <img
        className="absolute top-[176px] left-[647px] rounded-[3px] w-[615px] h-[515px] object-cover"
        alt=""
        src="/2147483648-211009-1@2x.png"
      />
      <div className="absolute top-[389px] left-[924px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[410px] left-[920px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[437px] left-[913px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[424px] left-[908px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[462px] left-[919px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[484px] left-[904px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[505px] left-[894px] rounded-[671.27px] bg-text-primary h-[26px] overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px] box-border">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[531px] left-[870px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[552px] left-[866px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <img
        className="absolute top-[670px] left-[1018px] rounded-31xl w-[17px] h-4 object-cover"
        alt=""
        src="/image-85@2x.png"
      />
      <img
        className="absolute top-[509px] left-[1069px] rounded-31xl w-[17px] h-4 object-cover"
        alt=""
        src="/image-85@2x.png"
      />
      <img
        className="absolute top-[489px] left-[1113px] rounded-31xl w-[17px] h-4 object-cover"
        alt=""
        src="/image-85@2x.png"
      />
      <img
        className="absolute top-[444px] left-[1092px] rounded-31xl w-[17px] h-4 object-cover"
        alt=""
        src="/image-85@2x.png"
      />
      <img
        className="absolute top-[431px] left-[1152px] rounded-31xl w-[17px] h-4 object-cover"
        alt=""
        src="/image-85@2x.png"
      />
      <img
        className="absolute top-[633px] left-[924px] rounded-31xl w-[17px] h-4 object-cover"
        alt=""
        src="/image-85@2x.png"
      />
      <img
        className="absolute top-[592px] left-[1143px] rounded-31xl w-[17px] h-4 object-cover"
        alt=""
        src="/image-85@2x.png"
      />
      <img
        className="absolute top-[592px] left-[974px] rounded-31xl w-[17px] h-4 object-cover"
        alt=""
        src="/image-85@2x.png"
      />
      <img
        className="absolute top-[519px] left-[974px] rounded-31xl w-[17px] h-4 object-cover"
        alt=""
        src="/image-85@2x.png"
      />
      <div className="absolute top-[579px] left-[858px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[566px] left-[856px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
      <div className="absolute top-[518px] left-[872px] rounded-[671.27px] bg-text-primary overflow-hidden flex flex-col items-start justify-start py-[5.370128154754639px] px-[10.740256309509277px]">
        <img
          className="relative rounded-31xl w-[17px] h-4 object-cover"
          alt=""
          src="/image-80@2x.png"
        />
      </div>
    </div>
  );
};

export default Dealers;
