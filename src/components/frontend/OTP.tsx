'use client'
import React, { useState, useCallback } from 'react';
import { Mail, Lock, Shield, CheckCircle, ArrowLeft, Phone, X } from 'lucide-react';

interface Step {
  title: string;
  icon: React.ReactNode;
}

const OTPVerification: React.FC = () => {
  const [step, setStep] = useState(0);
  const [otp, setOTP] = useState<string[]>(['', '', '', '']);
  const [inputValue, setInputValue] = useState('');
  const [usePhone, setUsePhone] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

  const steps: Step[] = [
    { title: "Welcome", icon: <Mail size={48} /> },
    { title: "OTP Verification", icon: <Lock size={48} /> },
    { title: "Enter OTP", icon: <Shield size={48} /> },
    { title: "Verified", icon: <CheckCircle size={48} /> },
  ];

  const handleOTPChange = useCallback((index: number, value: string) => {
    if (/^\d*$/.test(value)) {
      setOTP(prev => {
        const newOTP = [...prev];
        newOTP[index] = value;
        return newOTP;
      });
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      } else if (!value && index > 0) {
        document.getElementById(`otp-${index - 1}`)?.focus();
      }
    }
  }, []);

  const handleVerify = useCallback(() => {
    if (otp.join('').length === 4) {
      setStep(3);
    } else {
      alert("Please enter a complete 4-digit OTP.");
    }
  }, [otp]);

  const handleForgotPassword = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an API to handle the password reset
    alert(`Password reset link sent to ${forgotPasswordEmail}`);
    setShowForgotPassword(false);
    setForgotPasswordEmail('');
  }, [forgotPasswordEmail]);

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-200">Welcome Back!</h2>
            <p className="mb-6 text-gray-400">Let's secure your account</p>
            <button
              onClick={() => setStep(1)}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300"
            >
              Let's get started
            </button>
          </div>
        );
      case 1:
        return (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-200">OTP Verification</h2>
            <p className="mb-6 text-gray-400">Select a method to receive your OTP</p>
            <div className="mb-4">
              <button
                onClick={() => setUsePhone(true)}
                className={`px-4 py-2 rounded-l-full ${usePhone ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400'}`}
              >
                Phone
              </button>
              <button
                onClick={() => setUsePhone(false)}
                className={`px-4 py-2 rounded-r-full ${!usePhone ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400'}`}
              >
                Email
              </button>
            </div>
            <input
              type={usePhone ? 'tel' : 'email'}
              placeholder={usePhone ? 'Enter your phone number' : 'Enter your email'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-4 py-2 text-center text-xl bg-gray-800 text-gray-200 border-2 border-gray-700 rounded-lg mb-4 focus:border-purple-500 focus:outline-none"
            />
            <button
              onClick={() => setStep(2)}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300"
            >
              Get OTP
            </button>
            <p onClick={() => setShowForgotPassword(true)} className="mt-4 text-purple-400 cursor-pointer hover:underline">Forgot Password?</p>
          </div>
        );
      case 2:
        return (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-200">Enter OTP</h2>
            <p className="mb-6 text-gray-400">Enter the OTP sent to your {usePhone ? "phone number" : "email"}</p>
            <div className="flex justify-center space-x-2 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOTPChange(index, e.target.value)}
                  className="w-12 h-12 text-center text-2xl bg-gray-800 text-gray-200 border-2 border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              ))}
            </div>
            <button
              onClick={handleVerify}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300"
            >
              Verify
            </button>
            <p className="mt-4 text-purple-400 cursor-pointer hover:underline">Resend OTP</p>
          </div>
        );
      case 3:
        return (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-200">Verified Successfully!</h2>
            <p className="mb-6 text-gray-400">Your account has been verified</p>
            <button
              onClick={() => setStep(0)}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300"
            >
              Done
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-3xl shadow-2xl p-8 w-full max-w-lg border border-gray-700">
        <div className="flex justify-between items-center mb-8">
          {step > 0 && (
            <button onClick={() => setStep(prev => prev - 1)} className="text-purple-400">
              <ArrowLeft size={24} />
            </button>
          )}
          <div className="flex-1 flex justify-center">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-purple-400">
              {steps[step].icon}
            </div>
          </div>
        </div>
        {renderStep()}
      </div>
      {showForgotPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 rounded-3xl shadow-2xl p-8 w-full max-w-md border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-200">Forgot Password</h3>
              <button onClick={() => setShowForgotPassword(false)} className="text-gray-400 hover:text-gray-200">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleForgotPassword}>
              <input
                type="email"
                placeholder="Enter your email"
                value={forgotPasswordEmail}
                onChange={(e) => setForgotPasswordEmail(e.target.value)}
                className="w-full px-4 py-2 text-center text-xl bg-gray-700 text-gray-200 border-2 border-gray-600 rounded-lg mb-4 focus:border-purple-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OTPVerification;