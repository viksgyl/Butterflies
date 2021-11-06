import React from "react";

const ShippingAddresses = ({ addresses, selectShippingAddress, setSelectShippingAddress }) => {
	
	return (
		<div>
			{addresses?.map((location) => {
				return (
					<div
						onClick={() =>
							setSelectShippingAddress(
								location
							)
						}
						className={
							selectShippingAddress?.id ===
							location.id
								? "  mb-3  w-full  min-h-[81px] flex   justify-between  p-[16px] border   transition-all duration-1000	    border-transparent bg-primary text-white rounded-md cursor-pointer  ring-2 ring-primary ring-offset-2  "
								: " bg-white    w-full  min-h-[81px] flex   justify-between  p-[16px] text-secondary border  border-transparent  hover:border-primary rounded-md cursor-pointer mb-3 "
						}
					>
						<div className="flex">
							<div className="flex justify-start items-start">
								<svg
									width="18"
									height="22"
									viewBox="0 0 18 22"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M17.4604 8.62982C17.32 7.16873 16.8036 5.7689 15.9616 4.56664C15.1195 3.36437 13.9805 2.40065 12.6554 1.76931C11.3303 1.13798 9.86425 0.860541 8.40008 0.964024C6.93592 1.06751 5.5235 1.54838 4.30037 2.35982C3.24957 3.06247 2.36742 3.98912 1.71731 5.07321C1.0672 6.1573 0.665264 7.37193 0.540369 8.62982C0.417852 9.87948 0.575043 11.1407 1.00054 12.3221C1.42604 13.5035 2.10917 14.5753 3.00037 15.4598L8.30037 20.7698C8.39333 20.8636 8.50393 20.9379 8.62579 20.9887C8.74765 21.0395 8.87836 21.0656 9.01037 21.0656C9.14238 21.0656 9.27309 21.0395 9.39495 20.9887C9.51681 20.9379 9.62741 20.8636 9.72037 20.7698L15.0004 15.4598C15.8916 14.5753 16.5747 13.5035 17.0002 12.3221C17.4257 11.1407 17.5829 9.87948 17.4604 8.62982ZM13.6004 14.0498L9.00037 18.6498L4.40037 14.0498C3.72246 13.3719 3.20317 12.5521 2.87984 11.6496C2.5565 10.747 2.43715 9.78402 2.53037 8.82982C2.62419 7.86092 2.93213 6.92498 3.43194 6.08966C3.93175 5.25435 4.61093 4.54053 5.42037 3.99982C6.48131 3.29506 7.72668 2.91912 9.00037 2.91912C10.2741 2.91912 11.5194 3.29506 12.5804 3.99982C13.3874 4.53844 14.065 5.2491 14.5647 6.08076C15.0644 6.91242 15.3737 7.84442 15.4704 8.80982C15.5666 9.76725 15.4488 10.7341 15.1254 11.6404C14.8019 12.5466 14.281 13.3697 13.6004 14.0498ZM9.00037 4.99982C8.11035 4.99982 7.24032 5.26374 6.5003 5.75821C5.76028 6.25267 5.18351 6.95548 4.84291 7.77775C4.50232 8.60001 4.4132 9.50481 4.58684 10.3777C4.76047 11.2506 5.18905 12.0525 5.81839 12.6818C6.44773 13.3111 7.24955 13.7397 8.12246 13.9134C8.99538 14.087 9.90018 13.9979 10.7224 13.6573C11.5447 13.3167 12.2475 12.7399 12.742 11.9999C13.2364 11.2599 13.5004 10.3898 13.5004 9.49982C13.4977 8.30716 13.0228 7.1641 12.1794 6.32076C11.3361 5.47742 10.193 5.00246 9.00037 4.99982ZM9.00037 11.9998C8.50592 11.9998 8.02257 11.8532 7.61144 11.5785C7.20032 11.3038 6.87989 10.9133 6.69067 10.4565C6.50145 9.99971 6.45194 9.49705 6.54841 9.01209C6.64487 8.52714 6.88297 8.08169 7.2326 7.73205C7.58223 7.38242 8.02769 7.14432 8.51264 7.04786C8.9976 6.95139 9.50026 7.0009 9.95708 7.19012C10.4139 7.37934 10.8043 7.69977 11.079 8.1109C11.3537 8.52202 11.5004 9.00537 11.5004 9.49982C11.5004 10.1629 11.237 10.7987 10.7681 11.2676C10.2993 11.7364 9.66341 11.9998 9.00037 11.9998Z"
										fill="#121212"
									/>
								</svg>
							</div>
							<div className="ml-[10px] ">
								<p className="text-base leading-4   font-semibold">
									{
										location.country
									}
								</p>
								<p className=" text-xs leading-4 font-medium    w-[225px]   mt-[2px]">
									{
										location.formatted_address
									}
								</p>
							</div>
						</div>
						<div className="  flex justify-center items-center  float-right">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="28"
								height="27"
								viewBox="0 0 28 27"
								fill= {selectShippingAddress?.id ===
							location.id? "white":"var( --primary_color)"}
							>
								<path d="M26.1597 10.6734L16.8264 1.34003C16.0634 0.616021 15.0516 0.212402 13.9997 0.212402C12.9479 0.212402 11.9361 0.616021 11.1731 1.34003L1.83974 10.6734C1.09067 11.4234 0.669922 12.44 0.669922 13.5C0.669922 14.56 1.09067 15.5767 1.83974 16.3267L11.1731 25.66C11.9231 26.4091 12.9397 26.8298 13.9997 26.8298C15.0597 26.8298 16.0764 26.4091 16.8264 25.66L26.1597 16.3267C26.9088 15.5767 27.3295 14.56 27.3295 13.5C27.3295 12.44 26.9088 11.4234 26.1597 10.6734V10.6734ZM24.2797 14.4467L14.9464 23.78C14.8225 23.905 14.675 24.0042 14.5125 24.0719C14.35 24.1396 14.1758 24.1744 13.9997 24.1744C13.8237 24.1744 13.6494 24.1396 13.487 24.0719C13.3245 24.0042 13.177 23.905 13.0531 23.78L3.71974 14.4467C3.59476 14.3227 3.49557 14.1753 3.42788 14.0128C3.36019 13.8503 3.32534 13.676 3.32534 13.5C3.32534 13.324 3.36019 13.1497 3.42788 12.9873C3.49557 12.8248 3.59476 12.6773 3.71974 12.5534L13.0531 3.22003C13.177 3.09506 13.3245 2.99587 13.487 2.92818C13.6494 2.86048 13.8237 2.82563 13.9997 2.82563C14.1758 2.82563 14.35 2.86048 14.5125 2.92818C14.675 2.99587 14.8225 3.09506 14.9464 3.22003L24.2797 12.5534C24.4047 12.6773 24.5039 12.8248 24.5716 12.9873C24.6393 13.1497 24.6741 13.324 24.6741 13.5C24.6741 13.676 24.6393 13.8503 24.5716 14.0128C24.5039 14.1753 24.4047 14.3227 24.2797 14.4467ZM16.9464 9.8867C16.6953 9.63563 16.3548 9.49458 15.9997 9.49458C15.6447 9.49458 15.3041 9.63563 15.0531 9.8867C14.802 10.1378 14.6609 10.4783 14.6609 10.8334C14.6609 11.1884 14.802 11.529 15.0531 11.78L15.4531 12.1667H10.6664C10.3128 12.1667 9.97364 12.3072 9.72359 12.5572C9.47355 12.8073 9.33307 13.1464 9.33307 13.5V16.1667C9.33307 16.5203 9.47355 16.8595 9.72359 17.1095C9.97364 17.3596 10.3128 17.5 10.6664 17.5C11.02 17.5 11.3592 17.3596 11.6092 17.1095C11.8593 16.8595 11.9997 16.5203 11.9997 16.1667V14.8334H15.4531L15.0531 15.22C14.9281 15.344 14.8289 15.4914 14.7612 15.6539C14.6935 15.8164 14.6587 15.9907 14.6587 16.1667C14.6587 16.3427 14.6935 16.517 14.7612 16.6795C14.8289 16.8419 14.9281 16.9894 15.0531 17.1134C15.177 17.2383 15.3245 17.3375 15.487 17.4052C15.6494 17.4729 15.8237 17.5078 15.9997 17.5078C16.1758 17.5078 16.35 17.4729 16.5125 17.4052C16.675 17.3375 16.8225 17.2383 16.9464 17.1134L19.6131 14.4467C19.738 14.3227 19.8372 14.1753 19.9049 14.0128C19.9726 13.8503 20.0075 13.676 20.0075 13.5C20.0075 13.324 19.9726 13.1497 19.9049 12.9873C19.8372 12.8248 19.738 12.6773 19.6131 12.5534L16.9464 9.8867Z" />
							</svg>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ShippingAddresses;
