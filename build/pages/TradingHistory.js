import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const TradingHistory = () => {
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

  const onEmpleadosTextClick = useCallback(() => {
    navigate("/live-tracking");
  }, [navigate]);

  const onProcessosTextClick = useCallback(() => {
    navigate("/nft-collection");
  }, [navigate]);

  const onDistribuidoresTextClick = useCallback(() => {
    navigate("/dealers");
  }, [navigate]);

  const onImage83IconClick = useCallback(() => {
    navigate("/live-tracking");
  }, [navigate]);

  const onImage84IconClick = useCallback(() => {
    navigate("/nft-collection");
  }, [navigate]);

  return (
    <div className="relative rounded-xl bg-gray-600 w-full h-[720px] overflow-hidden text-left text-xl text-txt-active font-subtitulos">
      <div className="absolute top-[0px] left-[0px] w-[300px] h-[720px] text-sm text-txt-desactive">
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
        <div className="absolute h-[6.67%] w-[84%] top-[48.19%] right-[8%] bottom-[45.14%] left-[8%] rounded-xl bg-mediumslateblue-500 text-text-primary">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
          <div className="absolute h-[33.33%] w-[66.27%] top-[33.33%] left-[29.76%] font-medium inline-block">
            Trading history
          </div>
          <img
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[81.75%] bottom-[25%] left-[8.73%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/fluenthistory24filled1.svg"
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
            className="absolute h-3/6 w-[9.52%] top-[25%] right-[81.75%] bottom-[25%] left-[8.73%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/healthiconscityworkeroutline2.svg"
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
      <b className="absolute top-[37px] left-[342px] text-9xl inline-block w-[411px]">
        Trading history
      </b>
      <div className="absolute top-[30px] left-[981px] w-[252px] h-12 text-sm text-txt-desactive">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-bg-3" />
        <img
          className="absolute h-[43.13%] w-[8.21%] top-[27.08%] right-[85.04%] bottom-[29.79%] left-[6.75%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
        <div className="absolute w-[48.41%] top-[31.25%] left-[20.63%] font-medium inline-block">
          Buscar
        </div>
      </div>
      <div className="absolute top-[174px] left-[410px]">Leslie Alexander</div>
      <div className="absolute top-[250px] left-[410px]">Jerome Bell</div>
      <div className="absolute top-[326px] left-[410px]">Jerome Bell</div>
      <div className="absolute top-[402px] left-[410px]">Jacob Jones</div>
      <div className="absolute top-[478px] left-[410px]">Jane Cooper</div>
      <div className="absolute top-[554px] left-[410px]">Robert Fox</div>
      <div className="absolute top-[630px] left-[410px]">Devon Lane</div>
      <div className="absolute top-[706px] left-[410px]">Darrell Steward</div>
      <div className="absolute top-[200px] left-[410px] text-base text-txt-desactive">
        (405) 555-0128
      </div>
      <div className="absolute top-[276px] left-[410px] text-base text-txt-desactive">
        (684) 555-0102
      </div>
      <div className="absolute top-[352px] left-[410px] text-base text-txt-desactive">
        (302) 555-0107
      </div>
      <div className="absolute top-[428px] left-[410px] text-base text-txt-desactive">
        (405) 555-0128
      </div>
      <div className="absolute top-[504px] left-[410px] text-base text-txt-desactive">
        (405) 555-0128
      </div>
      <div className="absolute top-[580px] left-[410px] text-base text-txt-desactive">
        (239) 555-0108
      </div>
      <div className="absolute top-[656px] left-[410px] text-base text-txt-desactive">
        (201) 555-0124
      </div>
      <div className="absolute top-[732px] left-[410px] text-base text-txt-desactive">
        (405) 555-0128
      </div>
      <img
        className="absolute top-[174px] left-[344px] rounded-31xl w-[52px] h-[52px] object-cover"
        alt=""
        src="/rectangle-74@2x.png"
      />
      <img
        className="absolute top-[250px] left-[344px] rounded-31xl w-[52px] h-[52px] object-cover"
        alt=""
        src="/rectangle-75@2x.png"
      />
      <img
        className="absolute top-[326px] left-[344px] rounded-31xl w-[52px] h-[52px] object-cover"
        alt=""
        src="/rectangle-76@2x.png"
      />
      <img
        className="absolute top-[402px] left-[344px] rounded-31xl w-[52px] h-[52px] object-cover"
        alt=""
        src="/rectangle-77@2x.png"
      />
      <img
        className="absolute top-[478px] left-[344px] rounded-31xl w-[52px] h-[52px] object-cover"
        alt=""
        src="/rectangle-78@2x.png"
      />
      <img
        className="absolute top-[554px] left-[344px] rounded-31xl w-[52px] h-[52px] object-cover"
        alt=""
        src="/rectangle-79@2x.png"
      />
      <img
        className="absolute top-[630px] left-[344px] rounded-31xl w-[52px] h-[52px] object-cover"
        alt=""
        src="/rectangle-80@2x.png"
      />
      <img
        className="absolute top-[706px] left-[344px] rounded-31xl w-[52px] h-[52px] object-cover"
        alt=""
        src="/rectangle-78@2x.png"
      />
      <div className="absolute top-[174px] left-[662px]">
        Agregar distribuidor
      </div>
      <div className="absolute top-[250px] left-[662px]">Agregar proveedor</div>
      <div className="absolute top-[326px] left-[662px]">Agregar proveedor</div>
      <div className="absolute top-[402px] left-[662px]">
        Agregar distribuidor
      </div>
      <div className="absolute top-[478px] left-[662px]">Agregar cliente</div>
      <div className="absolute top-[554px] left-[662px]">
        Agregar distribuidor
      </div>
      <div className="absolute top-[630px] left-[662px]">Agregar proveedor</div>
      <div className="absolute top-[706px] left-[662px]">Agregar cliente</div>
      <div className="absolute top-[200px] left-[662px] text-sm font-medium">
        Implementos Peru S.A.C.
      </div>
      <div className="absolute top-[276px] left-[662px] text-sm font-medium">
        Repsol Comercial Sac
      </div>
      <div className="absolute top-[352px] left-[662px]">Jane Cooper</div>
      <div className="absolute top-[428px] left-[662px]">Jerome Bell</div>
      <div className="absolute top-[504px] left-[662px] text-sm font-medium">{`Marco Peruana S A `}</div>
      <div className="absolute top-[580px] left-[662px] text-sm font-medium">{`Marco Peruana S A `}</div>
      <div className="absolute top-[656px] left-[662px] text-sm font-medium">
        Madic Iberia
      </div>
      <div className="absolute top-[732px] left-[662px] text-base text-txt-desactive">
        (405) 555-0128
      </div>
      <div className="absolute top-[174px] left-[939px]">5/7/16</div>
      <div className="absolute top-[250px] left-[939px]">9/18/16</div>
      <div className="absolute top-[326px] left-[939px]">6/21/19</div>
      <div className="absolute top-[402px] left-[939px]">9/4/12</div>
      <div className="absolute top-[478px] left-[939px]">1/15/12</div>
      <div className="absolute top-[554px] left-[939px]">1/31/14</div>
      <div className="absolute top-[630px] left-[939px]">4/21/12</div>
      <div className="absolute top-[706px] left-[939px]">11/7/16</div>
      <div className="absolute top-[200px] left-[939px] text-base text-txt-desactive">
        16:08:24
      </div>
      <div className="absolute top-[276px] left-[939px] text-base text-txt-desactive">
        16:08:24
      </div>
      <div className="absolute top-[352px] left-[939px] text-base text-txt-desactive">
        16:08:24
      </div>
      <div className="absolute top-[428px] left-[939px] text-base text-txt-desactive">
        16:08:24
      </div>
      <div className="absolute top-[504px] left-[939px] text-base text-txt-desactive">
        16:08:24
      </div>
      <div className="absolute top-[580px] left-[939px] text-base text-txt-desactive">
        16:08:24
      </div>
      <div className="absolute top-[656px] left-[939px] text-base text-txt-desactive">
        16:08:24
      </div>
      <div className="absolute top-[728px] left-[943px] text-base text-txt-desactive">
        (405) 555-0128
      </div>
      <div className="absolute top-[118px] left-[344px] text-txt-desactive">
        User
      </div>
      <div className="absolute top-[118px] left-[662px] text-txt-desactive">
        Operation
      </div>
      <div className="absolute top-[118px] left-[939px] text-txt-desactive">
        Date
      </div>
      <div className="absolute top-[118px] left-[1139px] text-txt-desactive">
        Blocks
      </div>
      <div className="absolute top-[179px] left-[1063px] w-[182.2px] h-[18px] text-sm text-gray-900 font-dm-sans">
        <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[16.2px]">
          To
        </div>
        <b className="absolute top-[1px] left-[103.2px] text-xs leading-[140%] inline-block font-ubuntu text-lavender w-[79px]">
          0x7c1....eca60
        </b>
      </div>
      <div className="absolute top-[313px] left-[1063px] w-[182.2px] h-[18px] text-sm text-gray-900 font-dm-sans">
        <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[16.2px]">
          To
        </div>
        <b className="absolute top-[1px] left-[103.2px] text-xs leading-[140%] inline-block font-ubuntu text-lavender w-[79px]">
          0x7c1....eca60
        </b>
      </div>
      <div className="absolute top-[454px] left-[1063px] w-[182.2px] h-[18px] text-sm text-gray-900 font-dm-sans">
        <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[16.2px]">
          To
        </div>
        <b className="absolute top-[1px] left-[103.2px] text-xs leading-[140%] inline-block font-ubuntu text-lavender w-[79px]">
          0x7c1....eca60
        </b>
      </div>
      <div className="absolute top-[590px] left-[1063px] w-[185px] h-[18px] text-sm text-gray-900 font-dm-sans">
        <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[39.6px]">
          From
        </div>
        <b className="absolute top-[1px] left-[100.5px] text-xs leading-[140%] inline-block font-ubuntu text-lavender w-[84.5px]">
          0x7c1....eca60
        </b>
      </div>
      <div className="absolute top-[224px] left-[1063px] w-[185px] h-[18px] text-sm text-gray-900 font-dm-sans">
        <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[38px]">
          From
        </div>
        <b className="absolute top-[1px] left-[106px] text-xs leading-[140%] inline-block font-ubuntu text-lavender w-[79px]">
          0x8c3....jcg20
        </b>
      </div>
      <div className="absolute top-[358px] left-[1063px] w-[185px] h-[18px] text-sm text-gray-900 font-dm-sans">
        <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[38px]">
          From
        </div>
        <b className="absolute top-[1px] left-[106px] text-xs leading-[140%] inline-block font-ubuntu text-lavender w-[79px]">
          0x8c3....jcg20
        </b>
      </div>
      <div className="absolute top-[497px] left-[1063px] w-[185px] h-[18px] text-sm text-gray-900 font-dm-sans">
        <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[38px]">
          From
        </div>
        <b className="absolute top-[1px] left-[106px] text-xs leading-[140%] inline-block font-ubuntu text-lavender w-[79px]">
          0x8c3....jcg20
        </b>
      </div>
      <div className="absolute top-[636px] left-[1063px] w-[185px] h-[18px] text-sm text-gray-900 font-dm-sans">
        <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[38px]">
          From
        </div>
        <b className="absolute top-[1px] left-[106px] text-xs leading-[140%] inline-block font-ubuntu text-lavender w-[79px]">
          0x8c3....jcg20
        </b>
      </div>
      <div className="absolute top-[278px] left-[1063px] w-[189px] h-[18px] text-sm text-gray-900 font-dm-sans">
        <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[16.2px]">
          To
        </div>
        <b className="absolute top-[1px] left-[102px] text-xs leading-[140%] inline-block font-ubuntu text-lavender w-[87px]">
          0x4f1....mms60
        </b>
      </div>
      <div className="absolute top-[417px] left-[1063px] w-[186px] h-[18px] text-sm text-gray-900 font-dm-sans">
        <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[16.2px]">
          To
        </div>
        <b className="absolute top-[1px] left-[99px] text-xs leading-[140%] inline-block font-ubuntu text-lavender w-[87px]">
          0x4f1....mms60
        </b>
      </div>
      <div className="absolute top-[555px] left-[1063px] w-[186px] h-[18px] text-sm text-gray-900 font-dm-sans">
        <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[16.2px]">
          To
        </div>
        <b className="absolute top-[1px] left-[99px] text-xs leading-[140%] inline-block font-ubuntu text-lavender w-[87px]">
          0x4f1....mms60
        </b>
      </div>
      <div className="absolute top-[693px] left-[1063px] w-[186px] h-[18px] text-sm text-gray-900 font-dm-sans">
        <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[16.2px]">
          To
        </div>
        <b className="absolute top-[1px] left-[99px] text-xs leading-[140%] inline-block font-ubuntu text-lavender w-[87px]">
          0x4f1....mms60
        </b>
      </div>
      <img
        className="absolute top-[413px] left-[46px] w-[27px] h-[27px] object-cover cursor-pointer"
        alt=""
        src="/image-83@2x.png"
        onClick={onImage83IconClick}
      />
      <img
        className="absolute top-[468px] left-[45px] w-[30px] h-[29px] object-cover cursor-pointer"
        alt=""
        src="/image-841@2x.png"
        onClick={onImage84IconClick}
      />
    </div>
  );
};

export default TradingHistory;
