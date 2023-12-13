import React from "react";
import { calculateInvestmentResults,formatter } from "../util/investment";

const Result = ({ input }) => {
  let resultList = calculateInvestmentResults({ ...input });
  const initialInvestment = resultList[0].valueEndOfYear - resultList[0].interest- resultList[0].annualInvestment;
  //console.log(resultList);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th> Intrest (Year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultList.map((item, index) => {

          const totalIntret  =  item.valueEndOfYear - item.annualInvestment * item.year -initialInvestment;
          const totalAmountInvested = item.valueEndOfYear - totalIntret;
          return (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalIntret)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
              
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
