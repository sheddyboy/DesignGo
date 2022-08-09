import Image from "next/image";
import React, { useState } from "react";
import Location from "../components/Location";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import styles from "../styles/ContactPage.module.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit");
  };
  return (
    <section>
      <div className="container">
        <Card className={styles.wrapper}>
          <div className={styles.content}>
            <h1>Contact Us</h1>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
          <div className={styles.form}>
            <form onSubmit={(e) => submitHandler(e)}>
              <Input
                required
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                required
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                required
                placeholder="Phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                className={styles.message}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className={styles.btn}>
                <Button
                  onClick={() => {
                    submitHandler;
                  }}
                  type="Primary"
                >
                  SUBMIT
                </Button>
              </div>
            </form>
          </div>
          <div className={styles.pattern}>
            <Image
              alt=""
              src="/bg-pattern-hero-home.svg"
              width={640}
              height={640}
            />
          </div>
        </Card>
        <Location />
      </div>
    </section>
  );
};

export default ContactPage;
