
"use client"

import Image from "next/image";
import { useState } from "react";

export const Extension = () => {
  const [hide, setHidden] = useState(false);

  const onClose = () => {
    setHidden(true);
  }

  return <div hidden={hide}>
  <div className="b-widget-left">
    <Image src="/images/chrome-icon.svg" width="54" height="54" alt="Chrome Icon Extension" />
    <ul className="b-widget-left__list">
      <li className="b-widget-left__elem">
        <h3>Install extension</h3>
        <a className="b-widget-left-instruction" target="_blank" href={process.env.NEXT_PUBLIC_EXTENSION_CHROME}>{process.env.NEXT_PUBLIC_DOMAIN} Helper?
        </a>
      </li>
      <li className="b-widget-left__elem">
        <a href={process.env.NEXT_PUBLIC_EXTENSION_CHROME} className="b-widget-left-yes" target="_blank">Yes, install</a>
      </li>
    </ul>
    <button className="b-widget-close" onClick={onClose}>
      <Image src="/images/close.svg" alt="Close" width={10} height={10} />
    </button>
  </div>
</div>
}