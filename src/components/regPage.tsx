import React from 'react';
import { styled } from 'linaria/react';
import { RegBtn } from './header'

const RegPageWrap = styled.div`
  background: url('../../../src/image/regHeaderImage.jpg') no-repeat;
  background-size: 60%;
  background-position: 550px -0px;

  span {
    display: block;
    margin: 0 0 30px 7%;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;  }
  .logo {
    width: 500px;
    margin: 50px 0 30px 7%
  }
  .reg-form {
    margin: 0 auto;
    margin-bottom: 70px;
    padding: 32px;
    width: 90%;
    background-color: #161616;
    form {
      display: flex;
      flex-direction: column;
      .form-item {
        margin-bottom: 20px;
        label {
          width: 238px;
          display: inline-block;
          font-size: 14px;
          margin-top: 7px;
          text-align: right;
          line-height: 18px;
          margin-right: 30px;
          vertical-align: top;
        }
        input, select, textarea {
          color: #B2B2B2;
          width: 308px;
          border: solid 2px rgba(255, 255, 255, 0.4);
          resize: none;
          padding: 5px 16px 6px 16px;
          font-size: 14px;
          font-family: Amazon Ember Medium;
          line-height: 17px;
          border-radius: 16px;
          background-color: rgba(0, 0, 0, 0.3);
          box-sizing: border-box;
          :focus {
            outline: none;
            border: solid 3px rgba(255, 255, 255, 1);
          }
        }
        .checkbox {
          margin: 10px;
          width: 20px;
          transform: scale(2);
          background: #3d404e;
          border: #7f83a2 1px solid;
        }
        .checklabel {
          text-align: left;
          width: 550px;
        }
        .radio {
          width: auto;
          height: 30px;
          margin-left: 10px;
        }
        textarea {
          height: 83px; 
          overflow: hidden;
        }
      }
    }
    
    .form-heading1 {
      font-size: 48px;
    }
    .form-heading2 {
      font-size: 24px;
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }
  .text {
    margin-top: 60px;
    font-size: 1.4rem;
    line-height: 1.4;
    letter-spacing: -.02px;
    font-weight: 600;
  }
  ul {
    display: flex;
    list-style: none;
    padding-top: 20px;
    padding-bottom: 20px;
    li {
      padding-right: 15px;
    }
  }
  .small-text {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 13px;
    color: #b9b0b0;
    a {
      cursor: pointer;
        text-decoration: none;
        line-height: 1.5;
        letter-spacing: -.02px;
        color: white;
        font-weight: bold;
      :hover {
        color: #d617f0;
      }
    }
  }
`;

const FooterWrap = styled.div`
  margin: 10% 0 5% 7%;
`;

export const FooterEnd: React.FC = () => (
  <FooterWrap>
    <p className="text">Join the AWS Cloud community</p>
    <ul>
      <li><a href="twitter.com"><img src="../../../src/image/twit.png" alt="twitter"/></a></li>
      <li><a href="facebook.com"><img src="../../../src/image/fb.png" alt="facebook"/></a></li>
      <li><a href="https://www.linkedin.com/"><img src="../../../src/image/inst.png" alt="in"/></a></li>
      <li><a href="youtube.com"><img src="../../../src/image/ytb.png" alt="youtube"/></a></li>
      <li><a href="instagram.com"><img src="../../../src/image/intg.png" alt="instagram"/></a></li>
      <li><a href="mail.ru"><img src="../../../src/image/mail.png" alt="mail"/></a></li>
    </ul>
    <p className="small-text">
      <a href="https://aws.amazon.com/ru/privacy/?trk=direct">Privacy •</a>
      <a href="https://aws.amazon.com/ru/terms/?trk=direct"> Site Terms •</a>
      <a href="https://aws.amazon.com/ru/terms/?trk=direct"> Cookie Preferences • </a>
      © 2020, Amazon Web Services, Inc. or its affiliates. All rights reserved.
    </p>
  </FooterWrap>
);

const RegPage: React.FC = () => (
  <RegPageWrap>
    <img className="logo" src="../../../src/image/bigLogo.png" alt="logo"/>
    <span className="colored">NOV. 30 – DEC. 18 & JAN. 12 – 14</span>

    <div className="reg-form">
      <div className="form-heading1">REGISTRATION</div>
      <form>
        <div className="form-heading2">Please enter your contact details</div>
      
        <div className="form-item"> 
          <label >First Name</label>
          <input type="text"></input>
        </div>
        <div className="form-item"> 
          <label >Last Name</label>
          <input type="text"></input>
        </div>
        <div className="form-item"> 
          <label>Country / Region</label>
          <select aria-labelledby="countryLabel" aria-required="true" aria-describedby="error_country" class="jss16" id="country"><option value="">Select Country or Region</option><option value="US">United States</option><option value="AF">Afghanistan</option><option value="AX">Åland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="BN">Brunei Darussalam</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo</option><option value="CD">Congo, The Democratic Republic of The</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="CI">Cote D'ivoire</option><option value="HR">Croatia</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands (Malvinas)</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and Mcdonald Islands</option><option value="VA">Holy See (Vatican City State)</option><option value="HN">Honduras</option><option value="HK">Hong Kong Special Administrative Region</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KR">Korea, Republic of</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Lao People's Democratic Republic</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libyan Arab Jamahiriya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macau Special Administrative Region</option><option value="MK">Macedonia, The Former Yugoslav Republic of</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia, Federated States of</option><option value="MD">Moldova, Republic of</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="AN">Netherlands Antilles</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestinian Territory, Occupied</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russian Federation</option><option value="RW">Rwanda</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and The Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao Tome and Principe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia and The South Sandwich Islands</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SZ">Swaziland</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania, United Republic of</option><option value="TH">Thailand</option><option value="TL">Timor-leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="UM">United States Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="VG">Virgin Islands, British</option><option value="VI">Virgin Islands, U.S.</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select>
        </div>
        <div className="form-item"> 
          <label >City</label>
          <input type="text"></input>
        </div>
        <div className="form-item"> 
          <label >Postal Code</label>
          <input type="text"></input>
        </div>
        <div className="form-item"> 
          <label >Phone</label>
          <input type="phone"></input>
        </div>
        
        <div className="form-heading2">Tell us a bit about you</div>
      
        <div className="form-item"> 
          <label>Submitting on behalf of my:</label>
          <input className="radio" type="radio"/>
          <label className="radio">Business interests</label>
          <input className="radio" type="radio"/>
          <label className="radio">Personal interests</label>
        </div>
        <div className="form-item">
          <label>Job Tittle</label>
          <textarea  id="title" aria-errormessage="error_title" aria-describedby="error_title" aria-labelledby="titleLabel" aria-required="true" type="text" maxlength="128" class="jss1 jss13" aria-invalid="false"></textarea>
        </div> 
        <div className="form-item"> 
          <label >Company Name</label>
          <input type="text"></input>
        </div>
        <div className="form-item"> 
          <label >Job Role</label>
          <select aria-labelledby="jobRoleLabel" aria-required="true" aria-describedby="error_jobRole"  id="jobRole"><option value="">Select Role</option><option value="0">Academic / Researcher</option><option value="1">Advisor / Consultant</option><option value="2">Business Executive</option><option value="3">Developer / Engineer</option><option value="4">Entrepreneur (Founder/Co-Founder)</option><option value="5">IT Executive</option><option value="6">IT Professional or Technical Manager</option><option value="7">Press / Media Analyst</option><option value="8">Sales / Marketing</option><option value="9">Student</option><option value="10">Solution or Systems Architect</option><option value="11">System Administrator</option><option value="12">Venture Capitalist</option></select>
        </div>
        <div className="form-item"> 
          <label >Industry</label>
          <select aria-labelledby="industryLabel" aria-required="true" aria-describedby="error_industry" id="industry"><option value="">Select Industry</option><option value="0">Aerospace</option><option value="1">Agriculture</option><option value="2">Automotive</option><option value="3">Computers &amp; Electronics</option><option value="4">Consumer Goods</option><option value="5">Education</option><option value="6">Financial Services</option><option value="7">Gaming</option><option value="8">Government</option><option value="9">Healthcare</option><option value="10">Hospitality</option><option value="11">Life Sciences</option><option value="12">Manufacturing</option><option value="13">Marketing &amp; Advertising</option><option value="14">Media &amp; Entertainment</option><option value="15">Mining</option><option value="16">Non-Profit Organization</option><option value="17">Oil &amp; Gas</option><option value="18">Other</option><option value="19">Power &amp; Utilities</option><option value="20">Professional Services</option><option value="21">Real Estate &amp; Construction</option><option value="22">Retail</option><option value="23">Software &amp; Internet</option><option value="24">Telecommunications</option><option value="25">Transportation &amp; Logistics</option><option value="26">Travel</option><option value="27">Wholesale &amp; Distribution</option></select>
        </div>
        <div className="form-item"> 
          <label >Company Type</label>
          <select aria-labelledby="companyTypeLabel" aria-required="true" aria-describedby="error_companyType" id="companyType"><option value="">Select Type</option><option value="0">Education</option><option value="1">Enterprise</option><option value="2">Government - State &amp; Local</option><option value="3">Government - Federal</option><option value="4">Non-Profit</option><option value="5">Self Employed</option><option value="6">Small-Medium Business</option><option value="7">Start-Up</option></select>
        </div>
        <div className="form-item"> 
          <label >Company Size</label>
          <select aria-labelledby="companySizeLabel" aria-required="true" aria-describedby="error_companySize" id="companySize"><option value="">Select Size</option><option value="0">1-19 Employees</option><option value="1">20-99 Employees</option><option value="2">100-499 Employees</option><option value="3">500-999 Employees</option><option value="4">1,000-9,999 Employees</option><option value="5">10,000 Employees or More</option></select>
        </div>
        <div className="form-item"> 
          <label >Level of AWS Usage</label>
          <select aria-labelledby="awsUsageLevelLabel" aria-required="true" aria-describedby="error_awsUsageLevel" id="awsUsageLevel"><option value="">Select Usage</option><option value="0">Do not use AWS today</option><option value="1">Evaluating/experimenting with AWS</option><option value="2">Run dev/test workloads on AWS</option><option value="3">Run a single production workload on AWS</option><option value="4">Run multiple production workloads on AWS</option></select>
        </div>

        <div className="form-heading2">Set your username/password</div>
        <div className="form-item"> 
          <label >Email</label>
          <input type="email"></input>
        </div>
        <div className="form-item"> 
          <label >Password</label>
          <input type="passward"></input>
        </div>
        <div className="form-item"> 
          <label >Repeat Password</label>
          <input type="password"></input>
        </div>
        <div className="form-heading2">Connecting with AWS</div>
        <div className="form-item">
          <input className="checkbox" type="checkbox"></input>
          <label className="checklabel">Yes, I'd like Amazon Web Services (AWS) to share the latest news about AWS services and related offerings with me by email and telephone.
            <br/>
            <br/>
              You may unsubscribe from receiving AWS news and offers at any time by following the instructions in the communications received. AWS handles your information as described in the AWS Privacy Notice.
          </label>
        </div>
        <div className="form-heading2">Connecting with Sponsors</div>
        <div className="form-item">
          <input className="checkbox" type="checkbox"></input>
          <label className="checklabel">
            Yes, I'd like Amazon Web Services (AWS) to provide my contact information to AWS re:Invent 2020 Sponsors (Sponsor) if I choose to enter its virtual event booth or enter its sponsored content page so Sponsor may send me news and offers by email and telephone.
            <br/>
            <br/>
            There is no difference in the event experience if you decline to share your information. You may unsubscribe from receiving news and offers from a Sponsor at any time by following the instructions in the communications received. AWS handles your information as described in the AWS Privacy Notice. Providing a Sponsor with your information may involve transferring it to another country. For questions about how a Sponsor will handle your information, please contact the Sponsor directly or refer to its privacy policy.
          </label>
        </div>
        <div className="form-item">
          <label>Registration Code (Optional)</label>
          <input type="text"></input>
        </div>
        <p>By registering, you agree to the AWS Event Terms and Conditions and the AWS Code of Conduct</p>
        {RegBtn('Register')}
        
      </form>
    </div>
    {FooterEnd()}
  </RegPageWrap>
);

export default RegPage;