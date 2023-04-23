import tw from 'twin.macro';

export const Container = tw.div`
mt-12 w-10/12 

`;
export const SubTitle = tw.div`
[> p]:(text-sm text-[#1F1F1F])
`;

export const ErrorContainer = tw.div`
bg-[#FAFAFA] flex justify-center items-center mt-10 rounded-md
`;

export const ErrorText = tw.div`
[> h3]:(text-xl font-medium mb-3 )
[> p]:(text-sm text-[#1F1F1F])
`;
