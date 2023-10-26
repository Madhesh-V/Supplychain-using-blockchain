import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onLoginWalletsContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="relative rounded-xl bg-gray-600 w-full h-[720px] overflow-hidden text-center text-sm text-text-primary font-ubuntu">
      <img
        className="absolute top-[0px] left-[0px] w-[2001px] h-[1125px] object-cover"
        alt=""
        src="/wp3270206-3@2x.png"
      />
      <div className="absolute top-[247px] left-[335px] text-[13px] font-medium text-whitesmoke inline-block w-[535px]">
        Introducing our innovative decentralized eVault (dApp), a secure and
        immutable solution for storing personal files on the blockchain.
        Safeguard your important documents and data, ensuring they remain
        tamper-proof and accessible only to you, with the power of blockchain
        technology at your fingertips.
      </div>
      <div className="absolute top-[334px] left-[521px] text-xs font-medium">
        use wallet or extension to login
      </div>
      <b className="absolute top-[151px] left-[285px] text-[64px] inline-block font-subtitulos text-left w-[710px] h-[72px]">
        Assurance Gateway
      </b>
      <div
        className="absolute top-[490px] left-[614px] rounded-3xs bg-midnightblue-300 flex flex-row items-center justify-center py-3.5 px-[45px] gap-[9px] cursor-pointer text-left"
        onClick={onFrameContainerClick}
      >
        <b className="relative">Sign in</b>
        <img
          className="relative w-[14.5px] h-[10.5px]"
          alt=""
          src="/vector1.svg"
        />
      </div>
      <div
        className="absolute top-[494px] left-[434px] rounded-3xs bg-midnightblue-300 flex flex-row items-center justify-center py-3.5 px-[45px] gap-[9px] cursor-pointer text-left"
        onClick={onFrameContainer1Click}
      >
        <b className="relative">Login</b>
        <img
          className="relative w-[14.5px] h-[10.5px]"
          alt=""
          src="/vector1.svg"
        />
      </div>
      <div
        className="absolute top-[372px] left-[446px] rounded-3xs bg-midnightblue-400 w-[326px] h-[45px] flex flex-row items-center justify-start py-3.5 pr-[78px] pl-[72px] box-border gap-[13px] cursor-pointer"
        onClick={onLoginWalletsContainerClick}
      >
        <img className="relative w-6 h-6" alt="" src="/metamask.svg" />
        <img className="relative w-6 h-6" alt="" src="/phantom.svg" />
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/status.svg"
        />
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/coinbase.svg"
        />
        <img className="relative w-6 h-6" alt="" src="/brave1.svg" />
      </div>
      <div className="absolute top-[452px] left-[507px] text-base font-medium text-gray-700">
        Create new wallet account
      </div>
    </div>
  );
};

export default SigninPage;
