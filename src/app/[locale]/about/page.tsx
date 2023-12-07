const AbortPage = () => {
  return (
    <div className="mx-auto my-8 h-fit max-w-4xl flex-1 bg-white p-4 shadow-sm md:rounded">
      <h1 className="mb-4 text-2xl font-bold">dAbout</h1>
      <div>
        If you have any questions, complaints, or claims with respect to the our
        Services, please send us a message to:{process.env.NEXT_PUBLIC_EMAIL}
      </div>
    </div>
  );
};

export default AbortPage;
