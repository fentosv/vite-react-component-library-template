import React from 'react';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    barWidth?: string;
    barHeight?: string;
    leverSize?: string;
    barOnColor?: string;
    barOffColor?: string;
    leverOnColor?: string;
    leverOffColor?: string;
    barOnShadow?: string;
    barOffShadow?: string;
    leverOnShadow?: string;
    leverOffShadow?: string;
    barHoverShadow?: string;
    barFocusedShadow?: string;
    barActiveShadow?: string;
    leverHoverShadow?: string;
    leverFocusedShadow?: string;
    leverActiveShadow?: string;
    borderRadious?: string;
    checked: boolean;
    className?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
export default function ToggleSwitch({ barWidth, barHeight, leverSize, barOnColor, leverOnColor, barOffColor, leverOffColor, barOnShadow, leverOnShadow, barOffShadow, leverOffShadow, barHoverShadow, barFocusedShadow, barActiveShadow, leverHoverShadow, leverFocusedShadow, leverActiveShadow, borderRadious, checked, className, onChange, ...rest }: Props): JSX.Element;
export {};
