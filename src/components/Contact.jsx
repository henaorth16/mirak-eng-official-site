const Contact = () => {
  return (
    <div id="contact" className="w-full flex flex-wrap h-auto justify-center items-center gap-36 p-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-5 font-bold text-4xl uppercase">Contact Us</h1>
        <form action="" className="w-80">
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="name">Name</label>
            <input
              className="rounded-sm bg-gray-100 outline-none p-1 px-2"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="email">Email</label>
            <input
              className="rounded-sm bg-gray-100 outline-none p-1 px-2"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="subject">Subject</label>
            <input
              className="rounded-sm bg-gray-100 outline-none p-1 px-2"
              type="text"
              name="subject"
              id="subject"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="msg">Message</label>
            <textarea
              className="bg-gray-100 outline-none p-3 rounded-sm resize-none"
              name="msg"
              id=""
              cols="30"
              rows="7"
            ></textarea>
          </div>
        </form>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.53325267725!2d38.78240057314377!3d9.01502268921145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b873bbba4d%3A0x87eff01041884e16!2sMIRAK%20ENGINEERING%20PLC!5e0!3m2!1sen!2set!4v1707307698151!5m2!1sen!2set"
          style={{ border:0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md w-[280px] h-[160px] sm:w-[450px] sm:h-[250px] md:w-[600px] md:h-[300px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
