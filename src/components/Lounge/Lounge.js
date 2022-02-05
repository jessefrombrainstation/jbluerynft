import React from "react";
import "../Lounge/Lounge.scss";
import Connect from "../../assets/images/connect-wallet.png";
import Disconnect from "../../assets/images/logout-wallet.png";
import verification from "../../assets/images/verify-wallet.png";
import Buy from "../../assets/images/buy-wallet.png";
import Toke from "../../assets/images/coin-transparent-shiny.gif";
import PinkConnect from "../../assets/images/pink-connect-wallet.gif";
import PinkVerify from "../../assets/images/pink-verify-wallet.gif";
import VipWelcomeBoard from "../../assets/images/interface-vip.gif";
import { ReactComponent as Meta } from "../../assets/images/metamask.svg";
import { useMoralis, useNFTBalances } from "react-moralis";

function Lounge() {
  const {
    logout,
    authenticate,
    isAuthenticated,
    authError,
    user,
    isAuthenticating,
  } = useMoralis();
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances();

  const NFTBalances = () => {
    return (
      <div>
        {error && <>{JSON.stringify(error)}</>}
        <img
          src={verification}
          className="lounge__buttons"
          alt="Verify-wallet"
          onClick={() =>
            getNFTBalances({
              params: {
                token_address: "0x495f947276749Ce646f68AC8c248420045cb7b5e",
              },
            })
          }
        />
      </div>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="lounge">
        <img
          src={PinkConnect}
          alt="Pink-receving-wallet"
          className="pink-connect"
        />
        {isAuthenticating && (
          <div className="meta">
            <Meta />
          </div>
        )}
        <img
          src={Connect}
          className="lounge__buttons"
          alt="Connect-Wallet"
          onClick={() => {
            authenticate({
              signingMessage:
                "You are at the right place! Welcome to the Space Bar Lounge! Verify your tokens",
            });
            NFTBalances();
          }}
        />
        {authError && (
          <p className="access-failure">
            requested signature was not completed.
          </p>
        )}
      </div>
    );
  }

  if (data !== null) {
    if (data.total > 0) {
      return (
        <div className="lounge">
          {error && <>{JSON.stringify(error)}</>}
          <img
            src={Toke}
            className="toke"
            onClick={() =>
              getNFTBalances({
                params: {
                  token_address: "0x495f947276749Ce646f68AC8c248420045cb7b5e",
                },
              })
            }
          />
          <img
            src={VipWelcomeBoard}
            className="monitor"
            alt="welcome-to-space-bar-lounge"
          />
          <p className="lounge__info">
            Welcome, {user.get("ethAddress")}
            <br />
            our vip lounge is almost complete.
            <br />
            <br />
            here you will find our NFT injected video game, message board news,
            reedemable exclusive content, and upcoming event information!
          </p>
          <img
            src={Disconnect}
            className="lounge__buttons"
            alt="Logout-wallet"
            onClick={() => logout()}
          />
        </div>
      );
    }
  }

  // This is the case where we have the user's address
  // which means they've connected their wallet to our site!
  return (
    <div className="lounge">
      <img
        src={PinkVerify}
        alt="Pink-verifying-wallet"
        className="pink-verify"
      />
      <a href="https://opensea.io/collection/pink-sauce">
        <img src={Buy} className="lounge__buttons" alt="Buy-Pink-Sauce-NFT" />
      </a>
      <NFTBalances />
      <img
        src={Disconnect}
        className="lounge__buttons"
        alt="signing-off"
        onClick={() => logout()}
      />
    </div>
  );
}

// const LogoutButton = () => {
//   const { logout } = useMoralis();

//   return (
//     <img
//       src={Disconnect}
//       className="connect-bttn"
//       alt="signing-off"
//       onClick={() => logout()}
//     />
//   );
// };

// function Lounge() {
//   const { authenticate, isAuthenticated, authError, isAuthenticating, user } =
//     useMoralis({
//       address: "0xaF45AA8a156338Bb43bcD546775B2e938b5Be826",
//     });
//   if (!isAuthenticated) {
//     return (
//       <div>
//         {authError && (
//           <p className="access-failure">
//             requested signature was not completed.
//           </p>
//         )}
//         {isAuthenticating && <p className="access-failure">loading</p>}
//         <img
//           src={Connect}
//           className="connect-bttn"
//           alt="Connect-Wallet"
//           onClick={() =>
//             authenticate({
//               signingMessage:
//                 "You are at the right place! Welcome to the Space Bar Lounge! Verify your tokens",
//             })
//           }
//         />
//         <div className="lounge">
//           <p className="lounge__info">I am Lounge</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <LogoutButton />
//       <h1>Welcome {user.get("ethAddress")}, to the Space Bar Lounge!</h1>
//     </div>
//   );
// }

// const serverUrl = "https://trkzv1wsjs3t.usemoralis.com:2053/server";
// const appId = "HvJXM1kBE8FsYmf3I007HMj7pPXSfmtyKxbtUUyg";
// Moralis.start({ appId, serverUrl });

// const query = new Moralis.Query("0xaF45AA8a156338Bb43bcD546775B2e938b5Be826");
// query
//   .find("token_address")
//   .then(function (results) {
//     // results contains a weight / rank in result.get('score')
//     results.get("address");
//   })
//   .catch(function (error) {
//     // There was an error.
//   });

export default Lounge;
