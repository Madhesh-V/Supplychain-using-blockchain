import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Clients = () => {
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
    navigate("/trading-history");
  }, [navigate]);

  const onProcessosTextClick = useCallback(() => {
    navigate("/live-tracking");
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
    <div className="relative rounded-xl bg-gray-600 w-full h-[720px] overflow-hidden text-left text-xl text-txt-desactive font-subtitulos">
      <div className="absolute top-[0px] left-[0px] w-[300px] h-[720px] text-sm">
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
        <div className="absolute h-[6.67%] w-[84%] top-[40.42%] right-[8%] bottom-[52.92%] left-[8%] rounded-xl bg-mediumslateblue-500 text-txt-active">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-bg-3 hidden" />
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
        <div className="absolute top-[190px] left-[24px] rounded-xl bg-bg-3 w-[252px] h-[68px]" />
        <div className="absolute top-[198px] left-[35px] w-[230px] h-[736px] text-xl">
          <div className="absolute top-[0px] left-[66px]">Leslie Alexander</div>
          <div className="absolute top-[76px] left-[66px]">Jerome Bell</div>
          <div className="absolute top-[152px] left-[66px]">Ms Jerome Bell</div>
          <div className="absolute top-[228px] left-[66px]">Jacob Jones</div>
          <div className="absolute top-[304px] left-[66px]">Jane Cooper</div>
          <div className="absolute top-[380px] left-[66px]">Robert Fox</div>
          <div className="absolute top-[456px] left-[66px]">Devon Lane</div>
          <div className="absolute top-[532px] left-[66px]">
            Darrell Steward
          </div>
          <div className="absolute top-[608px] left-[66px]">Jane Cooper</div>
          <div className="absolute top-[684px] left-[66px]">
            Marvin McKinney
          </div>
          <div className="absolute top-[26px] left-[66px] text-base text-txt-desactive">
            (405) 555-0128
          </div>
          <div className="absolute top-[102px] left-[66px] text-base text-txt-desactive">
            (684) 555-0102
          </div>
          <div className="absolute top-[178px] left-[66px] text-base text-txt-desactive">
            (302) 555-0107
          </div>
          <div className="absolute top-[254px] left-[66px] text-base text-txt-desactive">
            (405) 555-0128
          </div>
          <div className="absolute top-[330px] left-[66px] text-base text-txt-desactive">
            (405) 555-0128
          </div>
          <div className="absolute top-[406px] left-[66px] text-base text-txt-desactive">
            (239) 555-0108
          </div>
          <div className="absolute top-[482px] left-[66px] text-base text-txt-desactive">
            (201) 555-0124
          </div>
          <div className="absolute top-[558px] left-[66px] text-base text-txt-desactive">
            (405) 555-0128
          </div>
          <div className="absolute top-[634px] left-[66px] text-base text-txt-desactive">
            (307) 555-0133
          </div>
          <div className="absolute top-[710px] left-[66px] text-base text-txt-desactive">
            (201) 555-0124
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-31xl w-[52px] h-[52px] object-cover"
            alt=""
            src="/rectangle-74@2x.png"
          />
          <img
            className="absolute top-[76px] left-[0px] rounded-31xl w-[52px] h-[52px] object-cover"
            alt=""
            src="/rectangle-75@2x.png"
          />
          <img
            className="absolute top-[152px] left-[0px] rounded-31xl w-[52px] h-[52px] object-cover"
            alt=""
            src="/rectangle-76@2x.png"
          />
          <img
            className="absolute top-[228px] left-[0px] rounded-31xl w-[52px] h-[52px] object-cover"
            alt=""
            src="/rectangle-77@2x.png"
          />
          <img
            className="absolute top-[304px] left-[0px] rounded-31xl w-[52px] h-[52px] object-cover"
            alt=""
            src="/rectangle-78@2x.png"
          />
          <img
            className="absolute top-[380px] left-[0px] rounded-31xl w-[52px] h-[52px] object-cover"
            alt=""
            src="/rectangle-79@2x.png"
          />
          <img
            className="absolute top-[456px] left-[0px] rounded-31xl w-[52px] h-[52px] object-cover"
            alt=""
            src="/rectangle-80@2x.png"
          />
          <img
            className="absolute top-[730px] left-[35px] rounded-31xl w-[52px] h-[52px] object-cover"
            alt=""
            src="/rectangle-78@2x.png"
          />
          <img
            className="absolute top-[806px] left-[35px] rounded-31xl w-[52px] h-[52px] object-cover"
            alt=""
            src="/rectangle-82@2x.png"
          />
          <img
            className="absolute top-[882px] left-[35px] rounded-31xl w-[52px] h-[52px] object-cover"
            alt=""
            src="/rectangle-76@2x.png"
          />
        </div>
      </div>
      <img
        className="absolute top-[68px] left-[632px] rounded-31xl w-[52px] h-[52px] object-cover"
        alt=""
        src="/rectangle-74@2x.png"
      />
      <div className="absolute h-[6.67%] w-[19.69%] top-[90%] right-[55%] bottom-[3.33%] left-[25.31%] rounded-xl bg-mediumslateblue-500 [backdrop-filter:blur(20px)] text-sm text-txt-active">
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
      <b className="absolute top-[65px] left-[716px] text-5xl inline-block text-text-primary w-[415px]">
        Leslie Alexander Sanchez Casas
      </b>
      <div className="absolute top-[99px] left-[716px] inline-block w-[249px]">
        71662994
      </div>
      <div className="absolute top-[194px] left-[632px] inline-block w-[249px]">
        Email
      </div>
      <div className="absolute top-[292px] left-[632px] inline-block w-[249px]">
        Telephone
      </div>
      <div className="absolute top-[293px] left-[935px] inline-block w-[249px]">
        Identification document
      </div>
      <div className="absolute top-[390px] left-[632px] inline-block w-[249px]">
        Direction
      </div>
      <div className="absolute top-[226px] left-[632px] text-txt-active inline-block w-[271px]">
        alexanderleslie@gmail.com
      </div>
      <div className="absolute top-[324px] left-[632px] text-txt-active inline-block w-[271px]">
        (405) 555-0128
      </div>
      <div className="absolute top-[325px] left-[935px] text-txt-active inline-block w-[271px]">
        71662994
      </div>
      <div className="absolute top-[422px] left-[632px] text-txt-active inline-block w-[271px]">{`2972 Westheimer Rd. Santa Ana, Illinois 85486 `}</div>
      <img
        className="absolute top-[56px] left-[1182px] w-12 h-12"
        alt=""
        src="/component-19.svg"
      />
      <img
        className="absolute top-[654px] left-[17px] rounded w-[52px] h-[51px] object-cover"
        alt=""
        src="/ftpbzqrxsagidng-1@2x.png"
      />
      <img
        className="absolute top-[417px] left-[44px] w-[27px] h-[27px] object-cover cursor-pointer"
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
    </div>
  );
};

export default Clients;
