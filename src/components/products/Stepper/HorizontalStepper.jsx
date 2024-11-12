import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import emeraldBlue from "../../../images/Icon/emerald-blue.svg";
import jewelryBlue from "../../../images/Icon/jewelry-blue.svg";
import gemStoneBlue from "../../../images/Icon/gem-stone-blue.svg";
const images = [emeraldBlue, jewelryBlue, gemStoneBlue];

export default function HorizontalStepper(props) {
  const { activeStep, steps } = props;

  return (
    <div className="bg-[#D4D4D4]">
      <div className="flex items-center justify-center mb-10">
        <div className="md:w-1/2 h-full">
          <div className="flex items-center justify-around py-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="flex justify-center items-center py-3">
                  <img src={images[index]} className="h-12 w-12" alt={step} />
                </div>
                <span className="w-32 text-xs uppercase text-center">
                  {step}
                </span>
              </div>
            ))}
          </div>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel
                    sx={{
                      "& .MuiStepIcon-root.Mui-active": {
                        color: "#6F64B1",
                      },
                      "& .MuiStepIcon-text": {
                        display: "none",
                      },
                      "& .MuiStepIcon-root.Mui-completed": {
                        color: "#6F64B1",
                      },
                    }}
                  ></StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
      </div>
    </div>
  );
}
