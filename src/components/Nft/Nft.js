import React from "react";
import { NftGallery } from "react-nft-gallery";
import "../Nft/Nft.scss";

export default function Nft() {
  return (
    <div className="nftgalleryone">
      <div className="nftinner">
        <NftGallery ownerAddress="0xaf45aa8a156338bb43bcd546775b2e938b5be826" />
      </div>
    </div>
  );
}
